# scrapbox-customizations

Scrapbox（Cosense）で使用するUserScriptとUserCSSのソースコードを管理するリポジトリです。

GitHub上の各 `script.js` と `style.css` を実装の正本とし、Scrapboxの解説記事に掲載する
コードも同じ内容に保ちます。詳しい背景や技術解説はScrapbox側、
このリポジトリの README には配置場所と使い方だけを記載します。

## UserScript

| ディレクトリ | 概要 | 状態 |
| --- | --- | --- |
| [【UserScript】クリックでチェックボックスを切り替える](src/user-script/【UserScript】クリックでチェックボックスを切り替える/) | 行頭のチェック記号をクリックして切り替える | 管理中 |
| [【UserScript】Ctrl+Bでチェックボックスを挿入する](src/user-script/【UserScript】Ctrl+Bでチェックボックスを挿入する/) | Ctrl+Bで未チェック記号を挿入する | 管理中 |
| [【UserScript】ページメニューに「Twitterにシェア」を追加する](src/user-script/【UserScript】ページメニューに「Twitterにシェア」を追加する/) | ページメニューからTwitterへページを共有する | 管理中 |
| [【UserScript】PopupMenuに「Twitterにシェア」を追加する](src/user-script/【UserScript】PopupMenuに「Twitterにシェア」を追加する/) | PopupMenuから選択文字列をTwitterへ共有する | 管理中 |

## UserCSS

| ディレクトリ | 概要 | 状態 |
| --- | --- | --- |
| [【Scrapbox】ハッシュタグをラベル風にする【UserCSS】](src/user-css/【Scrapbox】ハッシュタグをラベル風にする【UserCSS】/) | ハッシュタグをラベル風に表示する | 管理中 |
| [【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】](src/user-css/【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】/) | 右上のページメニューに表示されるスクロールバーを隠す | 管理中 |
| [【Scrapbox】画像と動画に枠と影をつける【UserCSS】](src/user-css/【Scrapbox】画像と動画に枠と影をつける【UserCSS】/) | Scrapboxアップロード画像などの画像とGyazo動画に境界線と影を付ける | 管理中 |

## 文書

- [`TODO.md`](TODO.md): 未着手または検討中の作業
- [`docs/spec_additions.md`](docs/spec_additions.md): 実施済みの追加仕様
- [`docs/spec_changes.md`](docs/spec_changes.md): 実施済みの仕様変更とリファクタリング
- [`AGENTS.md`](AGENTS.md): このリポジトリでの作業ルール

## 管理方針

- UserScriptは `src/user-script/`、UserCSSは `src/user-css/` 配下に配置する
- Scrapboxの記事を単位として、記事名のディレクトリで管理する
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

### Scrapbox標準JS・CSSの取得

UserScript・UserCSSの作成・修正・不具合調査の前に、Windowsで次のバッチを手動実行します。
Windows PowerShell 5.1とインターネット接続が必要です。バッチは同じフォルダーのPowerShellスクリプトを呼び出します。

```bat
scripts\fetch-scrapbox-assets.bat
```

保存先はリポジトリ内の `references/scrapbox/` です。実行時のカレントディレクトリには依存しません。

| 保存ファイル | 取得元 |
| --- | --- |
| `index.js` | `https://scrapbox.io/assets/index.js` |
| `app.css` | `https://scrapbox.io/assets/css/app.css` |
| `metadata.json` | ファイルごとの取得日時（タイムゾーン付き）・取得元URL |

両ファイルの取得と記録の作成が成功してから保存先を更新します。取得失敗時は既存ファイルと記録を維持し、終了コード1を返します。
取得ファイルはローカルの調査資料として扱い、Git管理・VS Codeの検索・ファイル監視から除外します。

取得ファイルだけで判断せず、実際のDOM・適用スタイルでも確認します。
調査結果は取得日時・参照URL・依存セレクター・確認した挙動とともに `docs/` へ記録します。

## カスタマイズの追加手順

1. 種類に応じて `src/user-script/` または `src/user-css/` 配下に、記事名のディレクトリを作る
2. `script.js` または `style.css` と、記事名・記事URL・使い方を記載した `README.md` を置く
3. この README の一覧へ追加する
4. Scrapboxの解説記事と実装本体の内容が一致することを確認する
