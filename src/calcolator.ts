const screen = {
  logic: document.querySelector(".operations"),
  result: document.querySelector(".answer"),

  setLogicScreen(param: string[]) {
    if (this.logic !== null) {
      this.logic.textContent = param.join("");
    }
  },

  setResultScreen(param: number) {
    if (this.result !== null && param !== 0) {
      this.result.textContent = String(param);
    } else if (this.result !== null) {
      this.result.textContent = '';
    }
  },
};

export const calculator = {
  logicContent: [] as string[],
  answerContent: 0 as number,

  pressCeButton() {
    this.logicContent.length = 0;
    this.answerContent = 0;
    screen.setLogicScreen(this.logicContent);
    screen.setResultScreen(this.answerContent);
  },
  pressPercentButton() {
    const expression = this.logicContent.join("");
    const midleNumber = Function('"use strict"; return (' + expression + ")")();
    this.answerContent = midleNumber * 100;
    screen.setResultScreen(this.answerContent);
  },
  pressBracketOpenButton() {
    this.logicContent.push("(");
    screen.setLogicScreen(this.logicContent);
  },
  pressBackspaseButton() {
    this.logicContent.pop();
    screen.setLogicScreen(this.logicContent);
  },

  pressSquareRootButton() {
    const expression = this.logicContent.join("");
    const midleNumber = Function('"use strict"; return (' + expression + ")")();
    this.answerContent = Math.sqrt(midleNumber);
    screen.setResultScreen(this.answerContent);
  },
  pressSquareButton() {
    const expression = this.logicContent.join("");
    const midleNumber = Function('"use strict"; return (' + expression + ")")();
    this.answerContent = midleNumber * midleNumber;
    screen.setResultScreen(this.answerContent);
  },
  pressBracketCloseButton() {
    this.logicContent.push(")");
    screen.setLogicScreen(this.logicContent);
  },
  pressDevideButton() {
    this.logicContent.push("/");
    screen.setLogicScreen(this.logicContent);
  },

  pressSevenButton() {
    this.logicContent.push("7");
    screen.setLogicScreen(this.logicContent);
  },
  pressEightButton() {
    this.logicContent.push("8");
    screen.setLogicScreen(this.logicContent);
  },
  pressNineButton() {
    this.logicContent.push("9");
    screen.setLogicScreen(this.logicContent);
  },
  pressMultiButton() {
    this.logicContent.push("*");
    screen.setLogicScreen(this.logicContent);
  },

  pressFourButton() {
    this.logicContent.push("4");
    screen.setLogicScreen(this.logicContent);
  },
  pressFiveButton() {
    this.logicContent.push("5");
    screen.setLogicScreen(this.logicContent);
  },
  pressSixButton() {
    this.logicContent.push("6");
    screen.setLogicScreen(this.logicContent);
  },
  pressMinusButton() {
    this.logicContent.push("-");
    screen.setLogicScreen(this.logicContent);
  },

  pressOneButton() {
    this.logicContent.push("1");
    screen.setLogicScreen(this.logicContent);
  },
  pressTwoButton() {
    this.logicContent.push("2");
    screen.setLogicScreen(this.logicContent);
  },
  pressThreeButton() {
    this.logicContent.push("3");
    screen.setLogicScreen(this.logicContent);
  },
  pressAddButton() {
    this.logicContent.push("+");
    screen.setLogicScreen(this.logicContent);
  },

  pressPlusMinusButton() {},
  presszeroButton() {
    this.logicContent.push("0");
    screen.setLogicScreen(this.logicContent);
  },
  pressdotButton() {
    this.logicContent.push(".");
    screen.setLogicScreen(this.logicContent);
  },
  pressequalButton() {
    const expression = this.logicContent.join("");
    this.answerContent = Function(
      '"use strict"; return (' + expression + ")"
    )();
    screen.setResultScreen(this.answerContent);
  },
};
