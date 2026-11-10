const CHECKBOX_SYMBOL = '⬜';
const SELECTION_SELECTOR = '.selections .selection';

/**
 * チェック記号を挿入するショートカットが押されたか判定する。
 * 日本語入力中も挿入できるように、IMEの変換状態は判定しない。
 *
 * @param {KeyboardEvent} e キーボードイベント
 * @returns {boolean} ショートカットの入力条件を満たす場合はtrue
 */
function isInsertCheckboxShortcut(e) {
  return (
    e.code === 'KeyB' && e.ctrlKey && // 「Ctrl+B」を押している
    !e.shiftKey && !e.altKey &&       // ShiftかAltを押していない
    !e.repeat                         // キーリピート中ではない
  );
}

/**
 * キーボードイベントと選択状態から、チェック記号を挿入すべきか判定する。
 *
 * @param {KeyboardEvent} e キーボードイベント
 * @returns {boolean} チェック記号を挿入する場合はtrue
 */
function shouldInsertCheckbox(e) {
  if (!isInsertCheckboxShortcut(e)) {
    return false;
  }

  // 文字列の範囲選択中は挿入しない。
  // Scrapboxでは、選択範囲が独自のDOM要素によって表現される。
  return document.querySelector(SELECTION_SELECTOR) === null;
}

/**
 * Ctrl+Bが押されたとき、Scrapboxのカーソル位置に未チェック記号を挿入する。
 * 文字列の範囲選択中およびキーリピート時は挿入しない。
 *
 * @param {KeyboardEvent} e キーボードイベント
 * @returns {void}
 */
function handleKeydown(e) {
  if (shouldInsertCheckbox(e)) {
    document.execCommand('insertText', null, CHECKBOX_SYMBOL);
  }
}

document.addEventListener('keydown', handleKeydown);
