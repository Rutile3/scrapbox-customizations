# Scrapbox記事のページ名統一

作成日: 2026-11-10

## 対象と確認範囲

管理中のUserScript 4記事・UserCSS 3記事のローカルのREADME、`page.txt`、導入記述を確認した。本書で命名ルールと移行先を定める。実際の改名は後続作業とし、Scrapbox側の現状・改名先の衝突・外部参照は未確認。

## 現行の差異

| 観点 | 現行の状態 | 統一方針 |
| --- | --- | --- |
| 接頭辞 | UserScriptは `【UserScript】` が2件、`【Scrapbox】` が2件 | 種類を先頭に記載 |
| UserCSSの位置 | 3件とも `【Scrapbox】機能名【UserCSS】` | `【UserCSS】機能名` に統一 |
| 語尾 | 「できるチェックボックス」「追加」「追加する」が混在 | 動作を表す文にする |
| メニュー名 | `page-edit-menu`、`PopupMenu`、右上のページメニューが混在 | PageMenu側は「ページメニュー」、選択文字列用は `PopupMenu` として区別 |
| サービス名 | タイトルのScrapboxの有無と、本文のScrapbox・Cosense表記が混在 | タイトルから外し、本文で説明する |

## 命名ルール

- タイトルは `【UserScript】機能を表す文` または `【UserCSS】機能を表す文` とする。
- サービス名はタイトルに含めない。本文のサービス説明は初出を「Cosense（旧Scrapbox）」、以降は「Cosense」とする。本文への適用は後続の記事拡充時に行う。
- API識別子の `scrapbox`、`scrapbox.io` のドメイン、既存の参考記事名・タグは機械置換しない。
- 「ON/OFFできる」は「切り替える」、「表示されるのを防ぐ」は「非表示にする」へ整理する。
- 「Twitterにシェア」は既存メニューの表示名として維持する。共有先の呼称・実装変更は含めない。
- フォルダー名はページ名と合わせ、Windowsで使用できない文字だけ既存方針に従って置換する（例: `/` → `／`）。今回の新名称には置換が必要な文字はない。

## 新旧ページ名対応表

| ID | 種類 | 現行ページ名 | 統一後のページ名 | 対応 |
| --- | --- | --- | --- | --- |
| 1 | UserScript | 【UserScript】クリックでON/OFFできるチェックボックス | 【UserScript】クリックでチェックボックスを切り替える | 改名 |
| 2 | UserScript | 【UserScript】Ctrl+Bでチェックボックスを挿入する | 【UserScript】Ctrl+Bでチェックボックスを挿入する | 維持 |
| 3 | UserScript | 【Scrapbox】page-edit-menuに「Twitterにシェア」を追加 | 【UserScript】ページメニューに「Twitterにシェア」を追加する | 改名 |
| 4 | UserScript | 【Scrapbox】PopupMenuに「Twitterにシェア」を追加する | 【UserScript】PopupMenuに「Twitterにシェア」を追加する | 改名 |
| 5 | UserCSS | 【Scrapbox】ハッシュタグをラベル風にする【UserCSS】 | 【UserCSS】ハッシュタグをラベル風にする | 改名 |
| 6 | UserCSS | 【Scrapbox】右上のページメニューにスクロールバーが表示されるのを防ぐ【UserCSS】 | 【UserCSS】ページメニューのスクロールバーを非表示にする | 改名 |
| 7 | UserCSS | 【Scrapbox】画像と動画に枠と影をつける【UserCSS】 | 【UserCSS】画像と動画に枠と影をつける | 改名 |

## 後続作業と確認条件

- 改名する6記事のフォルダー、README、`page.txt` のタイトル・対象記事へのリンク、`.url` の名前・URL、ルートREADME、TODOを同期する。過去の変更記録・調査記録の旧名称は維持する。
- Ctrl+B記事は改名不要。READMEと `page.txt` の `/api/code/Rutile3-Tech/【UserScript】Ctrl+Bでチェックボックスを挿入する/script.js` も維持する。ローカルで確認した明示的なimport記述はこの2箇所であり、他の読み込み元はScrapbox側で確認する。
- Scrapbox側で現行ページと改名先の存在・衝突を確認する。衝突時は上書きせず対応表を見直す。
- ローカル変更とScrapbox側の改名・参照更新を合わせて実施する。旧URL・旧import先が自動的に有効であり続けることを前提にしない。
- 全7記事の表示、記事間リンク、利用中のユーザーページからのUserScript読み込みと動作を確認し、結果を記録する。外部参照はローカル検索だけで確認済みとしない。
- 実装本体と本文内コードの一致、改行・インデントを確認する。対象外の参考リンクや画像URL、`page.txt` の表の列区切りタブは維持する。

## URL

Beforeはローカルの `.url` から取得した旧URL、Afterは新名称から生成した移行先URLです。IDはページ名対応表と対応します。新URLの存在確認は未実施です。

| ID | Before | After |
| --- | --- | --- |
| 1 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%A7ON%2FOFF%E3%81%A7%E3%81%8D%E3%82%8B%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91%E3%82%AF%E3%83%AA%E3%83%83%E3%82%AF%E3%81%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%82%92%E5%88%87%E3%82%8A%E6%9B%BF%E3%81%88%E3%82%8B) |
| 2 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91Ctrl+B%E3%81%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%82%92%E6%8C%BF%E5%85%A5%E3%81%99%E3%82%8B) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91Ctrl%2BB%E3%81%A7%E3%83%81%E3%82%A7%E3%83%83%E3%82%AF%E3%83%9C%E3%83%83%E3%82%AF%E3%82%B9%E3%82%92%E6%8C%BF%E5%85%A5%E3%81%99%E3%82%8B) |
| 3 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91page-edit-menu%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B) |
| 4 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91PopupMenu%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserScript%E3%80%91PopupMenu%E3%81%AB%E3%80%8CTwitter%E3%81%AB%E3%82%B7%E3%82%A7%E3%82%A2%E3%80%8D%E3%82%92%E8%BF%BD%E5%8A%A0%E3%81%99%E3%82%8B) |
| 5 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0%E3%82%92%E3%83%A9%E3%83%99%E3%83%AB%E9%A2%A8%E3%81%AB%E3%81%99%E3%82%8B%E3%80%90UserCSS%E3%80%91) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserCSS%E3%80%91%E3%83%8F%E3%83%83%E3%82%B7%E3%83%A5%E3%82%BF%E3%82%B0%E3%82%92%E3%83%A9%E3%83%99%E3%83%AB%E9%A2%A8%E3%81%AB%E3%81%99%E3%82%8B) |
| 6 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91%E5%8F%B3%E4%B8%8A%E3%81%AE%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%81%AB%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BC%E3%81%8C%E8%A1%A8%E7%A4%BA%E3%81%95%E3%82%8C%E3%82%8B%E3%81%AE%E3%82%92%E9%98%B2%E3%81%90%E3%80%90UserCSS%E3%80%91) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserCSS%E3%80%91%E3%83%9A%E3%83%BC%E3%82%B8%E3%83%A1%E3%83%8B%E3%83%A5%E3%83%BC%E3%81%AE%E3%82%B9%E3%82%AF%E3%83%AD%E3%83%BC%E3%83%AB%E3%83%90%E3%83%BC%E3%82%92%E9%9D%9E%E8%A1%A8%E7%A4%BA%E3%81%AB%E3%81%99%E3%82%8B) |
| 7 | [Before](https://scrapbox.io/Rutile3-Tech/%E3%80%90Scrapbox%E3%80%91%E7%94%BB%E5%83%8F%E3%81%A8%E5%8B%95%E7%94%BB%E3%81%AB%E6%9E%A0%E3%81%A8%E5%BD%B1%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B%E3%80%90UserCSS%E3%80%91) | [After](https://scrapbox.io/Rutile3-Tech/%E3%80%90UserCSS%E3%80%91%E7%94%BB%E5%83%8F%E3%81%A8%E5%8B%95%E7%94%BB%E3%81%AB%E6%9E%A0%E3%81%A8%E5%BD%B1%E3%82%92%E3%81%A4%E3%81%91%E3%82%8B) |
