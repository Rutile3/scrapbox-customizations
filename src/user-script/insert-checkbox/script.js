/**
 * Ctrl+Bが押されたとき、Scrapboxのカーソル位置に未チェック記号を挿入する。
 * 文字列の範囲選択中およびキーリピート時は挿入しない。
 *
 * @param {KeyboardEvent} e キーボードイベント
 * @returns {void}
 */
function handleKeydown(e) {
  if (e.code === 'KeyB' && e.ctrlKey && !e.shiftKey && !e.altKey && !e.repeat) {
    // 文字列の範囲選択中は挿入しない。
    // Scrapboxでは、選択範囲が独自のDOM要素によって表現される。
    const hasSelection =
      document.querySelector('.selections .selection') !== null;
    if (hasSelection) {
      return;
    }

    document.execCommand('insertText', null, '⬜');
  }
}

document.addEventListener('keydown', handleKeydown);
