# scrapbox-userscripts

Scrapbox（Cosense）で使用する UserScript のソースコードを管理するリポジトリです。

GitHub 上の各 `script.js` を実装の正本とし、Scrapbox の解説記事に掲載する
`code:script.js` も同じ内容に保ちます。詳しい背景や技術解説は Scrapbox 側、
このリポジトリの README には配置場所と使い方だけを記載します。

## UserScript

| ディレクトリ | 概要 | 状態 |
| --- | --- | --- |
| [`src/toggle-checkbox/`](src/toggle-checkbox/) | 行頭のチェック記号をクリックして切り替える | 管理中 |
| `src/insert-checkbox/` | Ctrl+B で未チェック記号を挿入する | ソース入手後に追加予定 |

未着手または検討中の作業は [`TODO.md`](TODO.md) で管理します。

## 管理方針

- UserScript は `src/` 配下に配置する
- 1 UserScript を 1 ディレクトリで管理する
- 実装本体は各ディレクトリの `script.js` とする
- Scrapbox へは `script.js` をそのままコピーする
- ビルド工程や TypeScript は導入せず、単一の JavaScript ファイルを維持する
- Scrapbox 側のコードを変更した場合も、同じコミットで `script.js` に反映する

## 開発環境

VS Code で共有するフォーマット設定は [`.vscode/settings.json`](.vscode/settings.json) で管理します。

- JavaScript は VS Code 標準フォーマッターで保存時に整形する
- インデントは 2 スペースとする
- 改行コードは LF とする
- ファイル末尾に改行を追加し、行末の空白を削除する
- 個人用の `*.code-workspace` は Git の管理対象外とする

## UserScript の追加手順

1. `src/` 配下に、内容を表す kebab-case のディレクトリを作る
2. `script.js` と簡潔な `README.md` を置く
3. この README の一覧へ追加する
4. Scrapbox の解説記事と `script.js` の内容が一致することを確認する
