const screen = {
  logic: document.querySelector(".operations"),
  result: document.querySelector(".answer"),
  errorField: document.querySelector(".error-screen"),

  setLogicScreen(param: string[]) {
    if (this.logic !== null) {
      this.logic.textContent = param.join("");
      this.resetErrorScreen();
    }
  },

  setResultScreen(param: number | string) {
    if (this.result !== null) {
      this.result.textContent = String(param);
      this.resetErrorScreen();
    }
  },

  setErrorScreen(param: string) {
    if (this.errorField) {
      this.errorField.classList.remove("nodisplay");
      this.errorField.textContent = `Ошибка: ${param}`;
    }
  },
  resetErrorScreen() {
    if (this.errorField) {
      this.errorField.classList.add("nodisplay");
      this.errorField.textContent = "";
    }
  },
};

export const calculator = {
  logicContent: [] as string[],
  answerContent: 0 as number | string,

  validateExpression(expressionArray: string[]): {
    isValid: boolean;
    error?: string;
  } {
    const expression = expressionArray.join("");

    if (expression.trim() === "") {
      return { isValid: false, error: "Введите выражение" };
    }

    if (!/^[\d+\-*/().\s]+$/.test(expression)) {
      return { isValid: false, error: "Недопустимые символы" };
    }

    const brackets = expression.replace(/[^()]/g, "");
    let balance = 0;
    for (const char of brackets) {
      balance += char === "(" ? 1 : -1;
      if (balance < 0) break;
    }
    if (balance !== 0) {
      return { isValid: false, error: "Несбалансированные скобки" };
    }

    if (/^[+*/]/.test(expression)) {
      return { isValid: false, error: "Оператор в начале" };
    }
    if (/[+\-*/]$/.test(expression)) {
      return { isValid: false, error: "Оператор в конце" };
    }

    if (/([+\-*/]{2,})/.test(expression)) {
      return { isValid: false, error: "Два оператора подряд" };
    }

    if (/(\.\d*\.|\.$)/.test(expression)) {
      return { isValid: false, error: "Некорректное число" };
    }

    if (/\/\s*0(?!\.)/.test(expression)) {
      return { isValid: false, error: "Деление на ноль" };
    }

    return { isValid: true };
  },

  pressCeButton() {
    this.logicContent.length = 0;
    this.answerContent = 0;
    screen.setLogicScreen(this.logicContent);
    screen.setResultScreen(this.answerContent);
    screen.resetErrorScreen();
  },
  pressPercentButton() {
    const validation = this.validateExpression(this.logicContent);
    if (!validation.isValid) {
      screen.setErrorScreen(validation.error || "Ошибка");
      return;
    }

    try {
      const expression = this.logicContent.join("");
      const result = Function('"use strict"; return (' + expression + ")")();

      // Дополнительная проверка деления на ноль для случаев типа (1/0)
      if (!isFinite(result)) {
        screen.setErrorScreen("Деление на ноль");
        return;
      }

      this.answerContent = result * 100;
      screen.setResultScreen(this.answerContent);
    } catch (error) {
      screen.setErrorScreen("Что-то пошло не так");
    }
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
    const validation = this.validateExpression(this.logicContent);
    if (!validation.isValid) {
      screen.setErrorScreen(validation.error || "Ошибка");
      return;
    }

    try {
      const expression = this.logicContent.join("");
      const result = Function('"use strict"; return (' + expression + ")")();

      // Дополнительная проверка деления на ноль для случаев типа (1/0)
      if (!isFinite(result)) {
        screen.setErrorScreen("Деление на ноль");
        return;
      }

      this.answerContent = Math.sqrt(result);
      screen.setResultScreen(this.answerContent);
    } catch (error) {
      screen.setErrorScreen("Что-то пошло не так");
    }
  },
  pressSquareButton() {
    const validation = this.validateExpression(this.logicContent);
    if (!validation.isValid) {
      screen.setErrorScreen(validation.error || "Ошибка");
      return;
    }

    try {
      const expression = this.logicContent.join("");
      const result = Function('"use strict"; return (' + expression + ")")();

      if (!isFinite(result)) {
        screen.setErrorScreen("Деление на ноль");
        return;
      }

      this.answerContent = result * result;
      screen.setResultScreen(this.answerContent);
    } catch (error) {
      screen.setErrorScreen("Что-то пошло не так");
    }
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

  pressPlusMinusButton() {
    if (this.logicContent[0] !== "-") {
      this.logicContent = ["-", ...this.logicContent];
    } else {
      this.logicContent = this.logicContent.slice(1);
    }
    screen.setLogicScreen(this.logicContent);
  },
  presszeroButton() {
    this.logicContent.push("0");
    screen.setLogicScreen(this.logicContent);
  },
  pressdotButton() {
    this.logicContent.push(".");
    screen.setLogicScreen(this.logicContent);
  },
  pressequalButton() {
    const validation = this.validateExpression(this.logicContent);
    if (!validation.isValid) {
      screen.setErrorScreen(validation.error || "Ошибка");
      return;
    }

    try {
      const expression = this.logicContent.join("");
      const result = Function('"use strict"; return (' + expression + ")")();

      // Дополнительная проверка деления на ноль для случаев типа (1/0)
      if (!isFinite(result)) {
        screen.setErrorScreen("Деление на ноль");
        return;
      }

      this.answerContent = result;
      screen.setResultScreen(this.answerContent);
    } catch (error) {
      screen.setErrorScreen("Что-то пошло не так");
    }
  },
  calculateLogic() {
    let logicAnswer: number = 0;
    const validation = this.validateExpression(this.logicContent);
    if (!validation.isValid) {
      screen.setErrorScreen(validation.error || "Ошибка");
      return;
    }

    try {
      const expression = this.logicContent.join("");
      const result = Function('"use strict"; return (' + expression + ")")();

      // Дополнительная проверка деления на ноль для случаев типа (1/0)
      if (!isFinite(result)) {
        screen.setErrorScreen("Деление на ноль");
        return;
      }
      logicAnswer = result;
    } catch (error) {
      screen.setErrorScreen("Что-то пошло не так");
    }
    return logicAnswer;
  },
};
