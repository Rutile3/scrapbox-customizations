# twitter-share-page-menu

Scrapbox（Cosense）のページメニューへ「Twitterにシェア」を追加し、現在のページタイトルと
URLをTwitterの投稿画面へ渡すUserScriptです。

## 使い方

1. [`script.js`](script.js) の内容をScrapboxのUserScript記事にある `code:script.js` へコピーする
2. 対象プロジェクトでUserScriptを有効にする
3. ページメニューの「Twitterにシェア」を選択する

実装の正本は `script.js` です。

## 動作

- `URLSearchParams` でページURLとタイトルを投稿画面へ渡す
- URL末尾のピリオドを `%2E` に置き換える
- タイトル内のピリオド直後へゼロ幅スペースを挿入し、ドメイン名や拡張子としての自動リンクを避ける
- 投稿画面を幅600px、高さ300pxの別ウィンドウで開く

## 関連記事

- [【Scrapbox】page-edit-menuに「Twitterにシェア」を追加](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91page-edit-menu%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0)

## 前提

Scrapboxの `scrapbox.PageMenu.addItem()` に依存します。また、ブラウザのポップアップ設定や
Twitter側の投稿画面の仕様変更により、別ウィンドウが開かない可能性があります。

