# insert-checkbox

Cosense（旧Scrapbox）の本文編集中にCtrl+Bを押すと、カーソル位置へ未チェック記号
`⬜` を挿入するUserScriptです。

## 導入方法

ユーザーページへ次の記述を追加します。

```text
[/Rutile3-Tech/【UserScript】Ctrl+Bでチェックボックスを挿入する]
```

```js
import '/api/code/Rutile3-Tech/【UserScript】Ctrl+Bでチェックボックスを挿入する/script.js';
```

実装の正本は [`script.js`](script.js) です。

## 動作

本文の編集中にCtrl+Bを押すと、カーソル位置へ `⬜` を挿入します。ただし、
次の場合は挿入しません。

- ShiftまたはAltを同時に押している
- キーを長押ししている
- 文字列を範囲選択している

## 関連記事

- [【UserScript】Ctrl+Bでチェックボックスを挿入する](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91Ctrl%2BB%E3%81%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%82%92%E6%8C%BF%E5%85%A5%E3%81%99%E3%82%8B)
- [Ctrl-cで独自のチェックマークを挿入するUserScript](https://scrapbox.io/nekobatoken/Ctrl-c%E3%81%A7%E7%8B%AC%E8%87%AA%E3%81%AE%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9E%E3%83%BC%E3%82%AF%E3%82%92%E6%8C%BF%E5%85%A5%E3%81%99%E3%82%8BUserScript)

## 注意点

- Ctrl+Bに割り当てられている既存操作と競合する可能性があります
- 選択範囲の判定は `.selections .selection` というCosense内部のDOM構造に依存します
- `document.execCommand()` は非推奨ですが、ブラウザのUndo履歴を維持したまま文字を挿入するために使用しています
- 将来動作しなくなった場合は、`#text-input` に対して `setRangeText()` を使う方法などを検討します

