# 【UserScript】クリックでON/OFFできるチェックボックス

Scrapbox の行頭にあるチェック記号をクリックし、未完了・完了の状態を
切り替える UserScript です。

行頭の `⬜` と `✅` をクリックするたびに、`⬜` → `✅` → `⬜` の順に切り替えます。

## 使い方

1. [`script.js`](script.js) の内容を Scrapbox の UserScript 記事にある
   `code:script.js` へコピーする
2. 対象プロジェクトで UserScript を有効にする
3. 行頭のチェック記号をクリックして状態を切り替える

実装の正本は `script.js` です。[`page.txt`](page.txt) はScrapbox形式の記事本文で、
コードを変更した場合は本文内の `code:script.js` も同期します。

## 関連記事

- [【UserScript】クリックでON/OFFできるチェックボックス](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%A7ON%2FOFF%E3%81%A7%E3%81%8D%E3%82%8B%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9)

ディレクトリ名では、Windowsのファイル名制約に合わせて記事名の `/` を `／` に置換しています。

## 前提

Scrapbox の DOM と疑似 keydown イベントに依存します。クリックのイベント委譲には
標準DOM APIを使用し、jQueryは不要です。Scrapbox 側の仕様変更時には動作確認が必要です。

再評価時は前回のクリックリスナーを解除して登録し直します。プロジェクトが変わった場合は、
次のコンテナー内クリック時に旧リスナーを解除します。30msの待機中に解除・プロジェクト変更が
あった場合も、旧処理による書き込みを行いません。
