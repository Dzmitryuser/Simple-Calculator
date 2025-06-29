import { calculator } from "./calculator";

const buttonsHolder: Element | null = document.querySelector(".keybord");

const ceButton = document.querySelector(".ce");
const percentButton = document.querySelector(".percent");
const bracketOpenButton = document.querySelector(".bracket-open");
const backspaseButton = document.querySelector(".back");

const squareRootButton = document.querySelector(".sq-root");
const squareButton = document.querySelector(".sq");
const bracketCloseButton = document.querySelector(".bracket-close");
const devideButton = document.querySelector(".dev");

const sevenButton = document.querySelector(".seven");
const eightButton = document.querySelector(".eight");
const nineButton = document.querySelector(".nine");
const multiButton = document.querySelector(".multi");

const fourButton = document.querySelector(".four");
const fiveButton = document.querySelector(".five");
const sixButton = document.querySelector(".six");
const minusButton = document.querySelector(".minus");

const oneButton = document.querySelector(".one");
const twoButton = document.querySelector(".two");
const threeButton = document.querySelector(".three");
const addButton = document.querySelector(".add");

const plusMinusButton = document.querySelector(".plus-minus");
const zeroButton = document.querySelector(".zero");
const dotButton = document.querySelector(".dot");
const equalButton = document.querySelector(".equal");

if (buttonsHolder) {
  buttonsHolder.addEventListener("click", (evt) => {
    if (evt.target === ceButton) {
      calculator.pressCeButton();
    } else if (evt.target === percentButton) {
      calculator.pressPercentButton();
    } else if (evt.target === bracketOpenButton) {
      calculator.pressBracketOpenButton();
    } else if (evt.target === backspaseButton) {
      calculator.pressBackspaseButton();
    } else if (evt.target === squareRootButton) {
      calculator.pressSquareRootButton();
    } else if (evt.target === squareButton) {
      calculator.pressSquareButton();
    } else if (evt.target === bracketCloseButton) {
      calculator.pressBracketCloseButton();
    } else if (evt.target === devideButton) {
      calculator.pressDevideButton();
    } else if (evt.target === sevenButton) {
      calculator.pressSevenButton();
    } else if (evt.target === eightButton) {
      calculator.pressEightButton();
    } else if (evt.target === nineButton) {
      calculator.pressNineButton();
    } else if (evt.target === multiButton) {
      calculator.pressMultiButton();
    } else if (evt.target === fourButton) {
      calculator.pressFourButton();
    } else if (evt.target === fiveButton) {
      calculator.pressFiveButton();
    } else if (evt.target === sixButton) {
      calculator.pressSixButton();
    } else if (evt.target === minusButton) {
      calculator.pressMinusButton();
    } else if (evt.target === oneButton) {
      calculator.pressOneButton();
    } else if (evt.target === twoButton) {
      calculator.pressTwoButton();
    } else if (evt.target === threeButton) {
      calculator.pressThreeButton();
    } else if (evt.target === addButton) {
      calculator.pressAddButton();
    } else if (evt.target === plusMinusButton) {
      calculator.pressPlusMinusButton();
    } else if (evt.target === zeroButton) {
      calculator.presszeroButton();
    } else if (evt.target === dotButton) {
      calculator.pressdotButton();
    } else if (evt.target === equalButton) {
      calculator.pressequalButton();
    }
  });
}

document.addEventListener("keydown", (evt) => {
  if (evt.key === "7") {
    calculator.pressSevenButton();
  } else if (evt.key === "8") {
    calculator.pressEightButton();
  } else if (evt.key === "9") {
    calculator.pressNineButton();
  } else if (evt.key === "4") {
    calculator.pressFourButton();
  } else if (evt.key === "5") {
    calculator.pressFiveButton();
  } else if (evt.key === "6") {
    calculator.pressSixButton();
  } else if (evt.key === "1") {
    calculator.pressOneButton();
  } else if (evt.key === "2") {
    calculator.pressTwoButton();
  } else if (evt.key === "3") {
    calculator.pressThreeButton();
  } else if (evt.key === "0") {
    calculator.presszeroButton();
  } else if (evt.key === "+") {
    calculator.pressAddButton();
  } else if (evt.key === "-") {
    calculator.pressMinusButton();
  } else if (evt.key === "*") {
    calculator.pressMultiButton();
  } else if (evt.key === "/") {
    calculator.pressDevideButton();
  } else if (evt.key === "Enter") {
    calculator.pressequalButton();
  } else if (evt.key === "Escape") {
    calculator.pressCeButton();
  } else if (evt.key === "Backspace") {
    calculator.pressBackspaseButton();
  } else if (evt.key === ")") {
    calculator.pressBracketCloseButton();
  } else if (evt.key === "(") {
    calculator.pressBracketOpenButton();
  } else if (evt.key === "%") {
    calculator.pressPercentButton();
  }
});
