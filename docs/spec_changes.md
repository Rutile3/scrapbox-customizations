# 仕様変更

## 2026-11-10

### ハッシュタグ記事のページ名統一（ローカル更新）

- 「【Scrapbox】ハッシュタグをラベル風にする【UserCSS】」を「【UserCSS】ハッシュタグをラベル風にする」へ改名し、フォルダー名、README、`page.txt` のタイトル、`.url` の名前・URL、ルートREADMEとTODOの参照を同期
- 完了項目をTODOから削除し、残件数を32項目へ更新。CSS本体と本文内コード、他の記事、過去の変更・調査記録は維持
- URL・パス・旧参照の残存、CSSと記事本文のタイトル以外の不変、改行・タブ・インデントと差分を確認
- Scrapbox側の改名・参照更新・表示確認は未実施で、既存の実環境確認項目として維持

### PopupMenu共有記事のページ名統一（ローカル更新）

- 「【Scrapbox】PopupMenuに「Twitterにシェア」を追加する」を「【UserScript】PopupMenuに「Twitterにシェア」を追加する」へ改名し、フォルダー名、README、`page.txt` のタイトル、`.url` の名前・URL、ルートREADMEを同期
- 完了項目をTODOから削除し、残件数を33項目へ更新。実装本体と本文内コード、他の記事、過去の変更・調査記録は維持
- ローカルに対象記事へのimport記述がないこと、URL・パス・旧参照の残存、実装コードの不変、改行・タブ・インデントと差分を確認
- Scrapbox側の改名・参照更新・読み込み確認は未実施で、既存の実環境確認項目として維持

### ページメニュー共有記事のページ名統一（ローカル更新）

- 「【Scrapbox】page-edit-menuに「Twitterにシェア」を追加」を「【UserScript】ページメニューに「Twitterにシェア」を追加する」へ改名し、フォルダー名、README、`page.txt` のタイトル、`.url` の名前・URL、ルートREADMEを同期
- 完了項目をTODOから削除し、残件数を34項目へ更新。実装本体と本文内コード、他の記事、過去の変更・調査記録は維持
- ローカルに対象記事へのimport記述がないこと、URL・パス・旧参照の残存、実装コードの不変、改行・タブ・インデントと差分を確認
- Scrapbox側の改名・参照更新・読み込み確認は未実施で、既存の実環境確認項目として維持

### クリック切替記事のページ名統一（ローカル更新）

- 「【UserScript】クリックでON/OFFできるチェックボックス」を「【UserScript】クリックでチェックボックスを切り替える」へ改名し、フォルダー名、README、`page.txt` のタイトル、`.url` の名前・URL、ルートREADME、TODOの参照を同期
- READMEから改名後は不要なスラッシュのファイル名置換の説明を削除。実装本体と本文内コード、他の記事、過去の変更・調査記録は維持
- ローカルに対象記事へのimport記述がないこと、URL・パス・旧参照の残存、実装コードの不変、改行・タブ・インデントと差分を確認
- 完了項目をTODOから削除し、残件数を35項目へ更新。Scrapbox側の改名・参照更新・読み込み確認は未実施で、既存の実環境確認項目として維持

### Scrapbox記事の命名ルールと新旧名称対応表

- 管理中の7記事の現行名・命名上の差異を整理し、[命名ルールと新旧ページ名・URL対応表](page_name_unification.md)を作成
- 6記事を改名対象とし、Ctrl+B記事の名称・URL・import先は維持する方針を記録。後続の同期対象と実環境での確認条件を明記
- 完了した文書化項目をTODOから削除し、残件数を32項目へ更新。実際の改名、実装変更、Scrapboxへの反映・確認は未実施

### チェックボックス切替のjQuery依存を解消

- `.on()`・`.off()` を `#app-container` の標準DOM APIによるクリック委譲へ置換し、`.lines` 内のクリックだけを対象とした
- `Symbol.for()` をキーに前回の解除関数を保持し、再評価時は旧コンテナーのリスナーも解除して重複登録を防止
- プロジェクト不一致は次のコンテナー内クリック時に検出して解除。30ms待機後も有効状態とプロジェクトを確認し、解除済み・移動後の処理による書き込みを防止
- 行頭判定、記号の切替順序、1500ms・30msの待機、疑似keydownとinput送信は維持。記事内コードとREADMEを同期し、完了した実装項目をTODOから削除
- ローカルでjQueryを用意しないイベント検証と構文・記事内コード一致・差分検査を実施
- 利用者の実行環境でScrapboxを操作し、正常動作を確認済み。利用者の指定により、この確認をもって実環境確認を完了とした。各項目の個別結果や実行環境のjQueryの有無を追加検証したものではない
- jQuery廃止対応を完了とし、TODOから当該ブランチの作業計画を削除。後続の作業計画の番号・参照を整理し、待機処理や疑似keydownに関する別課題は維持

### jQuery廃止対応の事前調査

- 全4件のUserScriptと記事内コード・依存関係を調査し、[調査記録](jquery_dependency_audit.md)へ置換対象と維持する動作を記載
- jQuery呼び出しはチェックボックス切替のイベント登録・解除3箇所に限定されることを確認。行頭判定、切替順序、待機処理、プロジェクト判定と解除タイミングを記録
- 完了した調査項目をTODOから削除。実装変更とScrapbox上の動作確認は未実施

### 記事名への移行後の文書整理

- 全対象の移行完了に合わせ、ルートREADMEから移行途中の記述を削除
- チェックボックス切替の記事READMEの末尾にある余分な空行を削除
- チェックボックス挿入の記事URLから行IDを外し、ほかの記事と同様に記事全体へのリンクへ統一

### keyboard-keyの廃止と記事名への移行完了

- 廃止済みのUserCSS `keyboard-key` の `style.css` とREADMEを削除し、ルートREADMEの管理対象一覧から除外
- 最後の移行予定だった `keyboard-key` を廃止したことで、現存する全UserScript・UserCSSの記事名フォルダーへの移行が完了。TODOから一連の移行作業の節を削除し、機能ごとの未完了課題は維持
- 過去の追加仕様・変更記録は履歴として維持

### 【Scrapbox】画像と動画に枠と影をつける【UserCSS】

- 記事名を基準にした管理への移行の続きとして、`src/user-css/media-border-shadow/` を `src/user-css/【Scrapbox】画像と動画に枠と影をつける【UserCSS】/` へ移動。CSSの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内CSSと実装本体の同期方針、および表の列区切りタブを維持する方針を記載
- ルートREADMEのリンクと記事README・TODOの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。実環境での表示確認TODOと過去の変更記録は維持

### 【Scrapbox】ハッシュタグをラベル風にする【UserCSS】

- 記事名を基準にした管理への移行の続きとして、`src/user-css/hashtag-label/` を `src/user-css/【Scrapbox】ハッシュタグをラベル風にする【UserCSS】/` へ移動。CSSの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内CSSと実装本体の同期方針を記載
- ルートREADMEのリンクと記事README・TODOの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。既存の機能改善TODOと過去の変更記録は維持

### 【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】

- 記事名を基準にした管理への移行の続きとして、`src/user-css/hide-page-menu-scrollbar/` を `src/user-css/【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】/` へ移動。CSSの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内CSSと実装本体の同期方針を記載
- ルートREADMEのリンクと記事READMEの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。過去の変更記録は維持

### 【Scrapbox】PopupMenuに「Twitterにシェア」を追加する

- 記事名を基準にした管理への移行の続きとして、`src/user-script/twitter-share-popup-menu/` を `src/user-script/【Scrapbox】PopupMenuに「Twitterにシェア」を追加する/` へ移動。JavaScriptの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内コードと実装本体の同期方針を記載
- ルートREADMEのリンクと記事READMEの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。過去の変更記録は維持

### 【Scrapbox】page-edit-menuに「Twitterにシェア」を追加

- 記事名を基準にした管理への移行の続きとして、`src/user-script/twitter-share-page-menu/` を `src/user-script/【Scrapbox】page-edit-menuに「Twitterにシェア」を追加/` へ移動。JavaScriptの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内コードと実装本体の同期方針を記載
- ルートREADMEのリンクと記事READMEの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。過去の変更記録は維持

### 【UserScript】Ctrl+Bでチェックボックスを挿入する

- 記事名を基準にした管理への移行の続きとして、`src/user-script/insert-checkbox/` を `src/user-script/【UserScript】Ctrl+Bでチェックボックスを挿入する/` へ移動。JavaScriptの内容は変更なし
- 記事本文の `page.txt` と記事URLの `.url` を追加し、記事READMEに本文内コードと実装本体の同期方針を記載
- ルートREADMEのリンクと記事README・TODOの見出しを記事名へ更新し、完了した移行対象をTODOの一覧から削除。既存の機能改善TODOと過去の変更記録は維持

### 【UserScript】クリックでON/OFFできるチェックボックス

- `src/user-script/toggle-checkbox/` を記事名に合わせて `src/user-script/【UserScript】クリックでON／OFFできるチェックボックス/` へ移動。JavaScriptの内容は変更なし
- Windowsのファイル名制約に合わせ、ディレクトリ名では記事名の `/` を `／` に置換
- 記事本文の `page.txt` と記事URLの `.url` を追加し、実装本体と本文内コードの同期方針をREADMEへ記載
- ルートREADMEとTODOを新しい記事名・配置に合わせて更新。記事READMEにチェック記号の切替順序と関連記事URLを記載し、対応するTODOを削除
- 記事名を基準に管理する方針と追加手順をルートREADMEへ記載。ほかの既存ディレクトリは順次移行

## 2026-09-24

### media-border-shadow

- Gyazo以外の画像も対象になったことに合わせ、`src/user-css/gyazo-media-border-shadow/` を `src/user-css/media-border-shadow/` へ改名。CSSの内容は変更なし
- 本機能のREADME、ルートREADME、およびTODOの名称・参照パスを更新。過去の変更記録の旧名称・旧パスは維持

### gyazo-media-border-shadow

- 画像のセレクターを `.page img.image[alt="Gyazo"]` から `.page img.image` へ変更。Scrapboxにアップロードした画像を含め、配信元や `alt` 属性を問わずページ本文内の `img.image` に境界線と影を適用
- Gyazo動画のセレクターと、`box-sizing`・境界線・影の指定は維持
- 本機能のREADMEとルートREADMEへ対象の拡張を反映

## 2026-08-27

### hashtag-label

- 標準の `transform` を維持し、重複していた `-webkit-transform` を削除。対応ブラウザでは通常表示とホバー時の拡大表示を維持
- `transition` の対象を `transform` に限定し、所要時間を `0.3s` と明示。ホバー時の拡大アニメーションは維持
- 背景の継承指定を `background` から `background-color` へ変更し、継承対象を背景色だけに限定
- 未作成ページのハッシュタグは境界線の色だけを上書きし、通常のハッシュタグと同じ `2px` の太さへ統一
- 境界線色を `currentColor` で文字色と共通化し、未作成ページ側の重複した境界線色指定を削除。既存の色と境界線の太さは維持
- CSSプロパティを表示、ボックスモデル、色、文字、およびアニメーションの順に整理。各プロパティの値と表示結果は維持

### gyazo-media-border-shadow

- 境界線を対象要素の指定サイズ内に含めるため `box-sizing: border-box` を追加。境界線と影の指定は維持
- ページ本文とGyazo埋め込みのセレクターから `main` および `div` のタグ名を削除し、クラス名による指定へ変更。対象要素と表示内容は維持
- Gyazo埋め込みのセレクターから `.square` と `.landscape` の形状クラスを外し、`.gyazo.oembed > iframe` へ集約。形状クラスを問わずGyazo埋め込み動画を対象に変更

### insert-checkbox

- 挿入するチェック記号と選択範囲のセレクターを名前付き定数へ集約。挿入内容と選択範囲の判定条件は維持
- 一度しか使用しない選択状態の変数を削除し、選択範囲の判定を条件式へ直接記述。選択範囲の判定条件は維持
- 日本語入力中もチェック記号を挿入できるように、IMEの変換状態を判定しない方針をコードコメントとREADMEへ明記。実行時の挙動は変更なし
- ショートカットの判定を `isInsertCheckboxShortcut` 関数として分離。キーの判定条件と挿入処理の実行条件は維持
- `isInsertCheckboxShortcut` 関数へ、責務、IMEの扱い、引数、および戻り値を示すJSDocを追加。実行時の挙動は変更なし
- ショートカットと範囲選択から挿入可否を判断する処理を `shouldInsertCheckbox` 関数として分離。ショートカットではない場合にDOMを検索しない処理順序と挿入条件は維持

### リポジトリ構成

- UserScriptを `src/user-script/`、UserCSSを `src/user-css/` 配下へ分類する構成に変更
- `toggle-checkbox` を `src/user-script/toggle-checkbox/`、`hashtag-label` を `src/user-css/hashtag-label/` で管理

## 2026-08-25

### toggle-checkbox

- 例外の出力を `console.log` から `console.error` に変更。例外発生後に処理を終了する挙動は維持
- 二次元配列の平坦化を `reduce` と `concat` の組み合わせから `Array.prototype.flat()` に変更。一段階だけ平坦化する挙動は維持
- 行頭判定の前処理を `trim()` から `trimStart()` に変更。既存のチェック記号の判定結果は維持
- チェック状態のデータ構造、keydown イベント送信クラス、および補助関数へ JSDoc を追加。実行時の挙動は変更なし
- チェック状態の循環、記号一覧、行テキスト、および次に書き込む記号の役割が分かるように変数名を整理。処理順序は維持
- 右矢印キーと Backspace キーのキーコードを `KEY_CODE` 定数へ集約。疑似 keydown イベントの送信方法は維持
- 次のチェック記号を求める処理を `getNextCheckboxSymbol` 関数として分離。切替順序とフォールバック動作は維持
- イベント名とイベント登録用セレクターを変数へ集約。jQuery のイベント登録・解除方法とタイミングは維持
- CSS クラス判定の正規表現を `/^c\-\d+$/` から `/^c-\d+$/` に変更。`c-数字` の判定結果は維持
- 入力欄、カーソル行、およびカーソル要素のDOM識別子を変数へ集約。DOM取得APIと取得タイミングは維持
- インラインのクリック処理を `handleCheckboxClick` 関数としてイベント登録から分離。処理順序とjQueryのイベント委譲は維持
- CSS クラスの判定を `classList.value` の空白分割から `DOMTokenList` の直接走査へ変更。`c-数字` の判定条件は維持
- チェック記号の判定関数を `isCharSpan` から `isCheckboxSymbolSpan` に変更し、引数名とJSDocも責務に合わせて整理。判定条件は維持
- 入力欄への書き込み関数を `writeText` から `writeToTextInput` に変更し、input イベント送信を含む責務をJSDocへ明記。DOM操作は維持
- カーソル行取得関数を `getCursorLineString` から `getCursorLineText` に変更し、JSDocの用語をDOMのテキスト取得に合わせて統一。取得方法は維持
- keydown イベント送信クラスを `KeydownEvent` から `KeydownEventDispatcher` に変更し、インスタンス名とJSDocも送信責務に合わせて整理。イベント処理は維持
- クリックイベントの `target` が `Element` であることを確認してからDOM判定を行うように変更
- `target` が `null` または `Element` 以外の場合は、安全に処理を終了するように機能を修正

### 開発環境

- VS Code 標準の JavaScript フォーマッターを使用する共有設定を `.vscode/settings.json` に追加
- 保存時整形、2 スペースのインデント、LF、末尾改行、および行末空白の削除を設定
- Git 操作時にもテキストファイルの LF を維持するため、`.gitattributes` を追加
- 個人用の `*.code-workspace` は Git の管理対象外とし、共有設定との役割を分離
