# 仕様変更

## 2026-09-24

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
