# 追加仕様

## 2026-08-27

### hashtag-label

- ハッシュタグをラベル風に表示するUserCSSを `src/user-css/hashtag-label/style.css` に追加
- 通常のハッシュタグは青、未作成ページへのリンクは赤系の色で表示
- ハッシュタグへマウスポインターを合わせたときに、拡大して表示
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のCSSファイルとして管理

### hide-page-menu-scrollbar

- 右上のページメニューに表示されるスクロールバーを隠すUserCSSを `src/user-css/hide-page-menu-scrollbar/style.css` に追加
- `scrapbox.PageMenu.addMenu()` の使用時に表示される縦スクロールバーも対象にするため、ページメニューへ `overflow: hidden` を指定
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のCSSファイルとして管理

### keyboard-key

- `[| キー入力]` をキーボードのキー風に表示するUserCSSを `src/user-css/keyboard-key/style.css` に追加
- `|` 装飾へ余白、枠線、外側の余白、および角丸を設定
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のCSSファイルとして管理

### gyazo-media-border-shadow

- Gyazo画像と動画へ境界線と影を付けるUserCSSを `src/user-css/gyazo-media-border-shadow/style.css` に追加
- ページ本文内のGyazo画像、動画、および正方形・横長の埋め込み動画を対象に指定
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のCSSファイルとして管理

### twitter-share-page-menu

- ページメニューへ「Twitterにシェア」を追加するUserScriptを `src/user-script/twitter-share-page-menu/script.js` に追加
- 現在のページURLとタイトルから `URLSearchParams` を生成し、Twitterの投稿画面を別ウィンドウで表示
- URL末尾のピリオドとタイトル内のピリオドがTwitter上で意図せず処理されないように調整
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のJavaScriptファイルとして管理

### twitter-share-popup-menu

- PopupMenuへ「Twitterにシェア」を追加するUserScriptを `src/user-script/twitter-share-popup-menu/script.js` に追加
- 選択文字列を `URLSearchParams` の `text` パラメーターへ設定し、Twitterの投稿画面を別ウィンドウで表示
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のJavaScriptファイルとして管理

### insert-checkbox

- Ctrl+Bでカーソル位置へ未チェック記号 `⬜` を挿入するUserScriptを `src/user-script/insert-checkbox/script.js` に追加
- ShiftまたはAltの併用時、キーリピート時、および文字列の範囲選択時は挿入しない
- Undo履歴を維持したまま挿入するため、非推奨であることを認識したうえで `document.execCommand()` を使用
- Scrapbox掲載コードと同じく、ビルドせずにコピーできる単一のJavaScriptファイルとして管理
