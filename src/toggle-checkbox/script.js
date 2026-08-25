setTimeout(() => {
  /** @type {string[][]} チェック状態として循環させる文字列の組み合わせ。 */
  const checkboxCycles = [['⬜', '✅']];

  const checkboxSymbols = checkboxCycles.flat();
  const startsWithCheckboxPattern = new RegExp(
    '^\\s*(' + checkboxSymbols.join('|') + ')'
  );
  const targetProject = scrapbox.Project.name;
  const appContainerSelector = '#app-container';
  const linesSelector = '.lines';
  const textInputId = 'text-input';
  const cursorLineSelector = '.lines div.line.cursor-line';
  const cursorClassName = 'cursor';
  const eventNamespace = `click.toggleCheckBox_${targetProject}`;
  const KEY_CODE = {
    BACKSPACE: 8,
    ARROW_RIGHT: 39,
  };

  /** Scrapbox の入力欄へ keydown イベントを送信するクラス。 */
  class KeydownEventDispatcher {
    constructor() {
      this.textArea = document.getElementById(textInputId);
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
  $(appContainerSelector).off(eventNamespace, linesSelector);
  $(appContainerSelector).on(
    eventNamespace,
    linesSelector,
    handleCheckboxClick
  );

  /**
   * チェック記号のクリックを処理する。
   *
   * @param {{ target: Element }} event クリックイベント
   * @returns {Promise<void>}
   */
  async function handleCheckboxClick(event) {
    if (scrapbox.Project.name !== targetProject) {
      $(appContainerSelector).off(eventNamespace, linesSelector);
      return;
    }
    const target = event.target;
    if (
      !isFirstElementChild(target) ||
      !isCheckboxSymbolSpan(target, checkboxSymbols)
    ) {
      return;
    }
    await new Promise((resolve) => setTimeout(resolve, 30));
    let lineText;
    try {
      lineText = getCursorLineText();
    } catch (err) {
      console.error(err);
      return;
    }
    if (!startsWithCheckboxPattern.test(lineText)) return;
    const targetX = target.getBoundingClientRect().left;
    const cursorX = document
      .getElementsByClassName(cursorClassName)[0]
      .getBoundingClientRect().left;
    const keydownEventDispatcher = new KeydownEventDispatcher();
    if (cursorX <= targetX) {
      keydownEventDispatcher.dispatch(KEY_CODE.ARROW_RIGHT);
    }
    keydownEventDispatcher.dispatch(KEY_CODE.BACKSPACE);
    const nextCheckboxSymbol = getNextCheckboxSymbol(
      lineText,
      target.textContent
    );
    writeToTextInput(nextCheckboxSymbol);
  }

  /**
   * 行頭にある現在のチェック記号から、次の記号を求める。
   *
   * @param {string} lineText 判定対象の行テキスト
   * @param {string} fallbackSymbol 現在の記号を特定できない場合の戻り値
   * @returns {string} 次に書き込むチェック記号
   */
  function getNextCheckboxSymbol(lineText, fallbackSymbol) {
    const lineWithoutLeadingWhitespace = lineText.trimStart();

    for (const cycle of checkboxCycles) {
      for (let i = 0; i < cycle.length; i++) {
        if (lineWithoutLeadingWhitespace.startsWith(cycle[i])) {
          return cycle[i + 1 < cycle.length ? i + 1 : 0];
        }
      }
    }

    return fallbackSymbol;
  }

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
   * カーソルがある行のテキストを取得する。
   *
   * @returns {string} カーソル行のテキスト
   * @throws {TypeError} カーソル行の要素が見つからない場合
   */
  function getCursorLineText() {
    return document.querySelector(cursorLineSelector).textContent;
  }

  /**
   * 要素が対象のチェック記号を表示する span か判定する。
   *
   * @param {Element} element 判定対象の要素
   * @param {string[]} targetSymbols 対象となるチェック記号
   * @returns {boolean} 対象のチェック記号を表示する span であれば true
   */
  function isCheckboxSymbolSpan(element, targetSymbols) {
    return (
      element.tagName === 'SPAN' &&
      targetSymbols.includes(element.textContent) &&
      [...element.classList].some((className) => /^c-\d+$/.test(className))
    );
  }

  /**
   * Scrapbox の入力欄へ文字列を書き込み、input イベントを送信する。
   *
   * @param {string} text 書き込む文字列
   * @returns {void}
   */
  function writeToTextInput(text) {
    const textArea = document.getElementById(textInputId);
    textArea.value = text;
    textArea.dispatchEvent(
      new InputEvent('input', { bubbles: true, cancelable: true })
    );
  }
}, 1500);
