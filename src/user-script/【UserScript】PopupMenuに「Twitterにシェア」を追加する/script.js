// PopupMenuに「Twitterにシェア」を追加します。
scrapbox.PopupMenu.addButton({
  title: 'Twitterにシェア',
  onClick: (text) => {
    const urlParams = new URLSearchParams({ text });
    const shareUrl = `https://twitter.com/intent/tweet?${urlParams}`;
    window.open(shareUrl, '_blank', 'width=600,height=300');
  },
});
