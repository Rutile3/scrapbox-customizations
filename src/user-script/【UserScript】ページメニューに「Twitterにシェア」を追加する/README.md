# 【UserScript】ページメニューに「Twitterにシェア」を追加する

Scrapbox（Cosense）のページメニューへ「Twitterにシェア」を追加し、現在のページタイトルと
URLをTwitterの投稿画面へ渡すUserScriptです。

## 使い方

1. [`script.js`](script.js) の内容をScrapboxのUserScript記事にある `code:script.js` へコピーする
2. 対象プロジェクトでUserScriptを有効にする
3. ページメニューの「Twitterにシェア」を選択する

実装の正本は `script.js` です。
[`page.txt`](page.txt) はScrapbox形式の記事本文で、コードを変更した場合は
本文内の `code:script.js` も同期します。

## 動作

- `URLSearchParams` でページURLとタイトルを投稿画面へ渡す
- URL末尾のピリオドを `%2E` に置き換える
- タイトル内のピリオド直後へゼロ幅スペースを挿入し、ドメイン名や拡張子としての自動リンクを避ける
- 投稿画面を幅600px、高さ300pxの別ウィンドウで開く

## 関連記事

- [【UserScript】ページメニューに「Twitterにシェア」を追加する](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)

## 前提

Scrapboxの `scrapbox.PageMenu.addItem()` に依存します。また、ブラウザのポップアップ設定や
Twitter側の投稿画面の仕様変更により、別ウィンドウが開かない可能性があります。

