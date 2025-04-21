/**
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат додавання
 */
const add = (a, b) => a + b;

/**
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат віднімання
 */
const subtract = (a, b) => a - b;

/**
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат множення
 */
const multiply = (a, b) => a * b;

/**
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number|string} Результат ділення або повідомлення про помилку
 */

const divide = (a, b) => {
  if (b === 0) {
    return 'Помилка: ділення на нуль!';
  }
  return a / b;
};

/**
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @param {string} operator - Оператор для обчислення: +, -, *, /
 * @returns {number|string} Результат операції або помилка
 */
const calculate = (a, b, operator) => {
  switch (operator) {
    case '+':
      return add(a, b);
    case '-':
      return subtract(a, b);
    case '*':
      return multiply(a, b);
    case '/':
      return divide(a, b);
    default:
      return 'Невідомий оператор!';
  }
};

const num1 = parseFloat(prompt('Введіть перше число:'));
const operator = prompt('Введіть оператор (+, -, *, /):');
const num2 = parseFloat(prompt('Введіть друге число:'));

const result = calculate(num1, num2, operator);
alert(`Результат: ${result}`);
