# toggle-checkbox

Scrapbox の行頭にあるチェック記号をクリックし、未完了・完了の状態を
切り替える UserScript です。

## 使い方

1. [`script.js`](script.js) の内容を Scrapbox の UserScript 記事にある
   `code:script.js` へコピーする
2. 対象プロジェクトで UserScript を有効にする
3. 行頭のチェック記号をクリックして状態を切り替える

実装の正本は `script.js` です。Scrapbox の解説記事へのリンクは、URL が確定後に
この README へ追記してください。

## 前提

Scrapbox の DOM、疑似 keydown イベント、および Scrapbox 上で利用可能な jQuery に
依存します。Scrapbox 側の仕様変更時には動作確認が必要です。

