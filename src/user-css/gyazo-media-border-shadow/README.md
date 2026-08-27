# gyazo-media-border-shadow

Scrapbox（Cosense）のページ本文に表示されるGyazo画像と動画へ、境界線と影を付ける
UserCSSです。白い背景の画像でも、ページ背景との境界を判別しやすくします。

## 使い方

1. [`style.css`](style.css) の内容をScrapboxのUserCSS記事にある `code:style.css` へコピーする
2. 対象プロジェクトでUserCSSを有効にする
3. Gyazo画像と、縦長・横長を含むGyazo動画の表示を確認する

実装の正本は `style.css` です。

## 対象

- Gyazo画像
- Gyazo動画
- 正方形の埋め込み動画
- 横長の埋め込み動画

`main.page` を付けることで、ページ本文内の要素だけを対象にすることを明示しています。

## 関連記事

- [【Scrapbox】画像と動画に枠と影をつける【UserCSS】](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91%E7%94%BB%E5%83%8F%E3%81%A8%E5%8B%95%E7%94%BB%E3%81%AB%E6%9E%A0%E3%81%A8%E5%BD%B1%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B%E3%80%90UserCSS%E3%80%91)

## 前提

ScrapboxのGyazo画像・動画に付与されるクラスと埋め込み構造に依存します。
記事で確認されているもの以外の動画形式が存在する可能性があり、Scrapbox側のDOM仕様変更時にも
動作確認が必要です。

