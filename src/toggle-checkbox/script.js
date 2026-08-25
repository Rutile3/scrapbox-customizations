setTimeout(() => {
  // チェックボックスとして使用する文字セットのリスト
  const checkboxSetList = [['⬜', '✅']];

  const allBoxes = checkboxSetList.flat();
  const startsWithBoxReg = new RegExp('^\\s*(' + allBoxes.join('|') + ')');
  const targetProject = scrapbox.Project.name;

  class KeydownEvent {
    constructor() {
      this.textArea = document.getElementById('text-input');
      this.event = document.createEvent('UIEvent');
      this.event.initEvent('keydown', true, true);
    }
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
      if (!isFirstElementChild(target) || !isCharSpan(target, allBoxes)) return;
      await new Promise((resolve) => setTimeout(resolve, 30));
      let lineString;
      try {
        lineString = getCursorLineString();
      } catch (err) {
        console.error(err);
        return;
      }
      if (!startsWithBoxReg.test(lineString)) return;
      const targetX = target.getBoundingClientRect().left;
      const cursorX = document
        .getElementsByClassName('cursor')[0]
        .getBoundingClientRect().left;
      const keydownEvent = new KeydownEvent();
      if (cursorX <= targetX) {
        keydownEvent.dispatch(39); // →
      }
      keydownEvent.dispatch(8); // Backspace
      const newBox = (() => {
        const trimmedLineString = lineString.trim();
        for (const checkboxSet of checkboxSetList) {
          for (let i = 0; i < checkboxSet.length; i++) {
            if (trimmedLineString.startsWith(checkboxSet[i])) {
              return checkboxSet[i + 1 < checkboxSet.length ? i + 1 : 0];
            }
          }
        }
        return target.textContent;
      })();
      writeText(newBox);
    }
  );

  function isFirstElementChild(element) {
    return element.parentNode.firstElementChild === element;
  }
  function getCursorLineString() {
    return document.querySelector('.lines div.line.cursor-line').textContent;
  }
  function isCharSpan(element, targetCharList) {
    return (
      element.tagName === 'SPAN' &&
      targetCharList.includes(element.textContent) &&
      element.classList.value.split(' ').some((value) => /^c\-\d+$/.test(value))
    );
  }
  function writeText(text) {
    const textArea = document.getElementById('text-input');
    textArea.value = text;
    textArea.dispatchEvent(
      new InputEvent('input', { bubbles: true, cancelable: true })
    );
  }
}, 1500);
