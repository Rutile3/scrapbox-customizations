# hide-page-menu-scrollbar

Scrapbox（Cosense）右上のページメニューに表示されるスクロールバーを隠す
UserCSSです。

## 使い方

1. [`style.css`](style.css) の内容をScrapboxのUserCSS記事にある `code:style.css` へコピーする
2. 対象プロジェクトでUserCSSを有効にする
3. ウィンドウ幅を狭めた場合や、ページメニューを追加した場合の表示を確認する

実装の正本は `style.css` です。

## 実装上の注意

当初は横スクロールバーだけを対象に `overflow-x` を変更していましたが、
`scrapbox.PageMenu.addMenu()` の使用時に縦スクロールバーが表示されるため、
最終版では `overflow: hidden` を指定しています。

## 関連記事

- [【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】](https://scrapbox.io/Rutile3-Tech/【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】)

## 前提

Scrapboxのページメニューを表す `.expandable-menu .page-menu` に依存します。
Scrapbox側のDOMまたは標準CSSの仕様変更時には動作確認が必要です。

