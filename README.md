# scrapbox-customizations

Scrapbox（Cosense）で使用するUserScriptとUserCSSのソースコードを管理するリポジトリです。

GitHub上の各 `script.js` と `style.css` を実装の正本とし、Scrapboxの解説記事に掲載する
コードも同じ内容に保ちます。詳しい背景や技術解説はScrapbox側、
このリポジトリの README には配置場所と使い方だけを記載します。

## UserScript

| ディレクトリ | 概要 | 状態 |
| --- | --- | --- |
| [【UserScript】クリックでON/OFFできるチェックボックス](src/user-script/【UserScript】クリックでON／OFFできるチェックボックス/) | 行頭のチェック記号をクリックして切り替える | 管理中 |
| [【UserScript】Ctrl+Bでチェックボックスを挿入する](src/user-script/【UserScript】Ctrl+Bでチェックボックスを挿入する/) | Ctrl+Bで未チェック記号を挿入する | 管理中 |
| [【Scrapbox】page-edit-menuに「Twitterにシェア」を追加](src/user-script/【Scrapbox】page-edit-menuに「Twitterにシェア」を追加/) | ページメニューからTwitterへページを共有する | 管理中 |
| [【Scrapbox】PopupMenuに「Twitterにシェア」を追加する](src/user-script/【Scrapbox】PopupMenuに「Twitterにシェア」を追加する/) | PopupMenuから選択文字列をTwitterへ共有する | 管理中 |

## UserCSS

| ディレクトリ | 概要 | 状態 |
| --- | --- | --- |
| [`hashtag-label/`](src/user-css/hashtag-label/) | ハッシュタグをラベル風に表示する | 管理中 |
| [`hide-page-menu-scrollbar/`](src/user-css/hide-page-menu-scrollbar/) | 右上のページメニューに表示されるスクロールバーを隠す | 管理中 |
| [`keyboard-key/`](src/user-css/keyboard-key/) | &#124; 装飾をキーボードのキー風に表示する | 管理中 |
| [`media-border-shadow/`](src/user-css/media-border-shadow/) | Scrapboxアップロード画像などの画像とGyazo動画に境界線と影を付ける | 管理中 |

## 文書

- [`TODO.md`](TODO.md): 未着手または検討中の作業
- [`docs/spec_additions.md`](docs/spec_additions.md): 実施済みの追加仕様
- [`docs/spec_changes.md`](docs/spec_changes.md): 実施済みの仕様変更とリファクタリング
- [`AGENTS.md`](AGENTS.md): このリポジトリでの作業ルール

## 管理方針

- UserScriptは `src/user-script/`、UserCSSは `src/user-css/` 配下に配置する
- Scrapboxの記事を単位として、記事名のディレクトリで管理する。既存の機能名ディレクトリは順次移行する
- 記事名にファイル名として使用できない文字が含まれる場合は置換する（例：`/` → `／`）。正確な記事名と記事URLは各READMEに記載する
- 実装本体は各ディレクトリの `script.js` または `style.css` とする
- Scrapboxへは実装本体をそのままコピーする
- ビルド工程やTypeScriptは導入せず、単一のJavaScriptまたはCSSファイルを維持する
- Scrapbox側のコードを変更した場合も、同じコミットで実装本体へ反映する
- 記事本文を `page.txt` として保存する場合は、実装本体を正本とし、本文内のコードも同じ変更で同期する。Scrapbox形式のインデントは維持する

## 開発環境

VS Code で共有するフォーマット設定は [`.vscode/settings.json`](.vscode/settings.json) で管理します。

- JavaScript は VS Code 標準フォーマッターで保存時に整形する
- CSS は VS Code 標準フォーマッターで保存時に整形する
- インデントは 2 スペースとする
- 改行コードは LF とする
- ファイル末尾に改行を追加し、行末の空白を削除する
- 個人用の `*.code-workspace` は Git の管理対象外とする

## カスタマイズの追加手順

1. 種類に応じて `src/user-script/` または `src/user-css/` 配下に、記事名のディレクトリを作る
2. `script.js` または `style.css` と、記事名・記事URL・使い方を記載した `README.md` を置く
3. この README の一覧へ追加する
4. Scrapboxの解説記事と実装本体の内容が一致することを確認する
