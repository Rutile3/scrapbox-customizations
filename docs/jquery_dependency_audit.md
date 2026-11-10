# UserScriptのjQuery依存調査

調査日: 2026-11-10

## 調査範囲と結果

`src/user-script/` の全4件について、`script.js`、記事本文の `page.txt`、README、導入記述を確認した。ローカルの静的調査であり、Scrapbox上の動作確認は未実施。

| UserScript | 実装・記事内コードの依存 | 対応 |
| --- | --- | --- |
| 【UserScript】クリックでON/OFFできるチェックボックス | `$()` によるイベント登録・解除が3箇所。READMEにもjQuery依存の記載あり | 標準DOM APIへ置換し、記事内コードとREADMEを同期する |
| 【UserScript】Ctrl+Bでチェックボックスを挿入する | `$`・`jQuery` の呼び出しなし。`document.addEventListener` を使用 | 置換不要 |
| 【Scrapbox】page-edit-menuに「Twitterにシェア」を追加 | `$`・`jQuery` の呼び出しなし。`scrapbox.PageMenu` を使用 | 置換不要 |
| 【Scrapbox】PopupMenuに「Twitterにシェア」を追加する | `$`・`jQuery` の呼び出しなし。`scrapbox.PopupMenu` を使用 | 置換不要 |

全4件に `jQuery` 識別子の呼び出しや外部jQueryの読み込みはない。検索で見つかるテンプレート文字列の `${...}` と正規表現の `$` はjQuery参照ではない。PopupMenu記事の参考リンク名に含まれる `#jQuery` も実行コードではないため維持する。

## 置換対象

対象ディレクトリ: `src/user-script/【UserScript】クリックでON／OFFできるチェックボックス/`

| `script.js` の調査時行番号 | `page.txt` の調査時行番号 | 現在の処理 | 置換時の要件 |
| --- | --- | --- | --- |
| 54 | 59 | `.off(eventNamespace, linesSelector)` | 登録済みの同機能のリスナーを解除し、再評価による重複登録を防ぐ |
| 55–59 | 60–64 | `.on(eventNamespace, linesSelector, handleCheckboxClick)` | `#app-container` で `.lines` へのクリックを委譲する。標準DOM APIの登録・解除と、再評価をまたいで解除対象を特定できる仕組みに置き換える |
| 69 | 74 | プロジェクト不一致時の `.off(eventNamespace, linesSelector)` | 旧プロジェクト用のリスナーを解除し、切替処理を終了する |

`eventNamespace` は `click.toggleCheckBox_${targetProject}`。現在はプロジェクト名付きの名前空間で登録・解除を対応させている。標準DOM APIへの置換では、同じ機能の旧リスナーを解除できる参照管理が必要。他機能のクリックリスナーを解除しない。

## 維持する動作

- イベント範囲: `#app-container` 内の `.lines` を経由するクリックだけを処理する。クリックされた `event.target` 自体を判定し、祖先のチェック記号へ判定を広げない。
- 対象要素: `event.target` が `Element` で、親の最初の子要素であり、`SPAN`、本文が `⬜` または `✅`、クラスに `/^c-\d+$/` に一致するものがある場合だけ進む。それ以外は無視する。
- 行頭判定: クリック後に `.lines div.line.cursor-line` の `textContent` を読み、`^\s*(⬜|✅)` に相当する正規表現で判定する。先頭の空白は許容する。DOM上の最初の子要素判定と行テキストの行頭判定は両方維持する。
- 切替順序: `checkboxCycles = [['⬜', '✅']]` に従い、`⬜` → `✅` → `⬜` と循環する。次の記号は `trimStart()` 後の行頭から決定し、該当しない場合の戻り値はクリック対象の `textContent`。
- 初期化待機: スクリプト評価から1500ms後に初期化し、その時点の `scrapbox.Project.name` を `targetProject` として保存する。待機の必要性は今回検証しておらず、変更しない。
- クリック後待機: 対象要素の判定後に30ms待ってからカーソル行を取得する。この待機時間と処理順序は変更しない。カーソル行取得時の例外は `console.error` へ出力し、処理を終了する。
- 入力処理: カーソルの左端が記号の左端以下なら疑似右矢印keydownを送信し、その後Backspaceを送信する。`#text-input` の値を次の記号へ変更し、バブルするキャンセル可能な `input` イベントを送信する。疑似keydownの生成・送信方法は今回変更しない。
- プロジェクト判定: ハンドラー冒頭で現在のプロジェクトと保存値を比較する。不一致なら登録解除して終了する。現状の解除タイミングは移動直後ではなく、移動後に当該ハンドラーが呼ばれた時点。30ms待機後には再判定していない。
- 再評価: 同一プロジェクトでは、初期化時の解除後に登録することで単一のハンドラーにする意図を維持する。プロジェクトをまたいで残る旧登録の扱いも、次の実装と実環境確認で確認する。

## 次の作業と対象外

次はイベント登録・解除のみを置き換え、`page.txt` のコードとREADMEの依存関係を同期する。その後、jQueryのないScrapboxで切替、対象外クリック、再評価後の単一実行、プロジェクト移動時の解除を確認する。

初期化・クリック後待機の見直し、疑似keydownの整理、DOM取得の安全性改善、他UserScriptの改善は既存の別課題として扱う。本調査では実装・記事本文を変更していない。
