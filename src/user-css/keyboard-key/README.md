# keyboard-key

Scrapbox（Cosense）の装飾記法 `[| キー入力]` を、キーボードのキーのような
枠付き表示にするUserCSSです。ショートカットキーの説明などに利用できます。

## 使い方

1. [`style.css`](style.css) の内容をScrapboxのUserCSS記事にある `code:style.css` へコピーする
2. 対象プロジェクトでUserCSSを有効にする
3. `[| Ctrl + K]` のように入力する

実装の正本は `style.css` です。

## 使用例

```text
[| Ctrl + K]→[| Ctrl + J]
```

## 関連記事

- [【Scrapbox】『|』でキー入力を表現【UserCSS】](https://scrapbox.io/Rutile3-Tech/【Scrapbox】『%7C』でキー入力を表現【UserCSS】)

## 前提

Scrapboxの `|` 装飾に付与される `.deco-|` クラスに依存します。CSSセレクターでは
パイプをエスケープし、`.deco-\|` と記述しています。Scrapbox側のクラス仕様変更時には
動作確認が必要です。

