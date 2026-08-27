// page-edit-menuに「Twitterにシェア」を追加します。
scrapbox.PageMenu.addItem({
  title: 'Twitterにシェア',
  onClick: () => {
    const urlParams = new URLSearchParams({
      // TwitterがURL末尾の「.」をURLの一部として認識しないため、
      // パーセントエンコードされた「%2E」に置き換えます。
      url: location.href.replace(/\.$/, '%2E'),

      // ドメイン風文字列や拡張子が自動リンクされないように、
      // タイトル内の「.」の直後へゼロ幅スペースを挿入します。
      text: document.title.replaceAll('.', '.\u200B'),
    });

    const shareUrl = `https://twitter.com/intent/tweet?${urlParams}`;
    window.open(shareUrl, '_blank', 'width=600,height=300');
  },
});
