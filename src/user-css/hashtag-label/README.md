# hashtag-label

Scrapbox（Cosense）のハッシュタグを、枠線と余白のあるラベル風の表示にする
UserCSSです。リンク先が存在しないハッシュタグは、赤系の色で表示します。

## 使い方

1. [`style.css`](style.css) の内容をScrapboxのUserCSS記事にある `code:style.css` へコピーする
2. 対象プロジェクトでUserCSSを有効にする
3. ハッシュタグの通常表示、未作成ページへのリンク、ホバー表示を確認する

実装の正本は `style.css` です。

## 関連記事

- [【Scrapbox】ハッシュタグをラベル風にする【UserCSS】](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0%E3%82%92%E3%83%A9%E3%83%99%E3%83%AB%E9%A2%A8%E3%81%AB%E3%81%99%E3%82%8B%E3%80%90UserCSS%E3%80%91)
- [settings - Porter for Scrapbox オンラインヘルプ](https://scrapbox.io/porterapp/settings)

## 前提

Scrapboxのハッシュタグリンクを表す `a[type="hashTag"]` と、未作成ページへのリンクを
表す `.empty-page-link` に依存します。Scrapbox側のDOM仕様変更時には動作確認が必要です。

