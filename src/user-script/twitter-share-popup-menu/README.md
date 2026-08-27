# twitter-share-popup-menu

Scrapbox（Cosense）のPopupMenuへ「Twitterにシェア」を追加し、選択した文字列が
入力された状態でTwitterの投稿画面を開くUserScriptです。

## 使い方

1. [`script.js`](script.js) の内容をScrapboxのUserScript記事にある `code:script.js` へコピーする
2. 対象プロジェクトでUserScriptを有効にする
3. ページ内の文字列を選択する
4. PopupMenuの「Twitterにシェア」を選択する

実装の正本は `script.js` です。

## 動作

- PopupMenuから選択文字列を受け取る
- `URLSearchParams` の `text` パラメーターへ選択文字列を設定する
- 投稿画面を幅600px、高さ300pxの別ウィンドウで開く

## 関連記事

- [【Scrapbox】PopupMenuに「Twitterにシェア」を追加する](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91PopupMenu%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B)

## 前提

Scrapboxの `scrapbox.PopupMenu.addButton()` に依存します。また、ブラウザの
ポップアップ設定やTwitter側の投稿画面の仕様変更により、別ウィンドウが開かない可能性があります。

