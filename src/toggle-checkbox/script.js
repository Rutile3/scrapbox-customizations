setTimeout(() => {
  /** @type {string[][]} チェック状態として循環させる文字列の組み合わせ。 */
  const checkboxCycles = [['⬜', '✅']];

  const checkboxSymbols = checkboxCycles.flat();
  const startsWithCheckboxPattern = new RegExp(
    '^\\s*(' + checkboxSymbols.join('|') + ')'
  );
  const targetProject = scrapbox.Project.name;

  /** Scrapbox の入力欄へ keydown イベントを送信する。 */
  class KeydownEvent {
    constructor() {
      this.textArea = document.getElementById('text-input');
      this.event = document.createEvent('UIEvent');
      this.event.initEvent('keydown', true, true);
    }

    /**
     * @param {number} keyCode キーコード
     * @param {boolean} [withShift=false] Shift キーを押した状態にするか
     * @param {boolean} [withCtrl=false] Ctrl キーを押した状態にするか
     * @param {boolean} [withAlt=false] Alt キーを押した状態にするか
     * @param {boolean} [withCommand=false] Command キーを押した状態にするか
     * @returns {void}
     */
    dispatch(
      keyCode,
      withShift = false,
      withCtrl = false,
      withAlt = false,
      withCommand = false
    ) {
      this.event.keyCode = keyCode;
      this.event.shiftKey = withShift;
      this.event.ctrlKey = withCtrl;
      this.event.altKey = withAlt;
      this.event.metaKey = withCommand;
      this.textArea.dispatchEvent(this.event);
    }
  }

  // ボックスクリックでオンオフする
  $('#app-container').off(`click.toggleCheckBox_${targetProject}`, '.lines');
  $('#app-container').on(
    `click.toggleCheckBox_${targetProject}`,
    '.lines',
    async (event) => {
      if (scrapbox.Project.name !== targetProject) {
        $('#app-container').off(
          `click.toggleCheckBox_${targetProject}`,
          '.lines'
        );
        return;
      }
      const target = event.target;
      if (!isFirstElementChild(target) || !isCharSpan(target, checkboxSymbols))
        return;
      await new Promise((resolve) => setTimeout(resolve, 30));
      let lineText;
      try {
        lineText = getCursorLineString();
      } catch (err) {
        console.error(err);
        return;
      }
      if (!startsWithCheckboxPattern.test(lineText)) return;
      const targetX = target.getBoundingClientRect().left;
      const cursorX = document
        .getElementsByClassName('cursor')[0]
        .getBoundingClientRect().left;
      const keydownEvent = new KeydownEvent();
      if (cursorX <= targetX) {
        keydownEvent.dispatch(39); // →
      }
      keydownEvent.dispatch(8); // Backspace
      const nextCheckboxSymbol = (() => {
        const lineWithoutLeadingWhitespace = lineText.trimStart();
        for (const cycle of checkboxCycles) {
          for (let i = 0; i < cycle.length; i++) {
            if (lineWithoutLeadingWhitespace.startsWith(cycle[i])) {
              return cycle[i + 1 < cycle.length ? i + 1 : 0];
            }
          }
        }
        return target.textContent;
      })();
      writeText(nextCheckboxSymbol);
    }
  );

  /**
   * 指定した要素が親要素の最初の子要素か判定する。
   *
   * @param {Element} element 判定対象の要素
   * @returns {boolean} 最初の子要素であれば true
   */
  function isFirstElementChild(element) {
    return element.parentNode.firstElementChild === element;
  }

  /**
   * カーソルがある行の文字列を取得する。
   *
   * @returns {string} カーソル行の文字列
   * @throws {TypeError} カーソル行の要素が見つからない場合
   */
  function getCursorLineString() {
    return document.querySelector('.lines div.line.cursor-line').textContent;
  }

  /**
   * 要素が対象のチェック記号を表示する文字用 span か判定する。
   *
   * @param {Element} element 判定対象の要素
   * @param {string[]} targetCharList 対象となるチェック記号
   * @returns {boolean} 対象の span であれば true
   */
  function isCharSpan(element, targetCharList) {
    return (
      element.tagName === 'SPAN' &&
      targetCharList.includes(element.textContent) &&
      element.classList.value.split(' ').some((value) => /^c\-\d+$/.test(value))
    );
  }

  /**
   * Scrapbox の入力欄へ文字列を書き込む。
   *
   * @param {string} text 書き込む文字列
   * @returns {void}
   */
  function writeText(text) {
    const textArea = document.getElementById('text-input');
    textArea.value = text;
    textArea.dispatchEvent(
      new InputEvent('input', { bubbles: true, cancelable: true })
    );
  }
}, 1500);
