/**
 * Функція add  виконує операцію додавання двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат додавання
 */
const add = (a, b) => a + b;

/**
 * Функція subtract виконує операцію віднімання двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат віднімання
 */
const subtract = (a, b) => a - b;

/**
 * Функція multiply виконує операцію множення двох чисел
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @returns {number} Результат множення
 */
const multiply = (a, b) => a * b;

/**
 * Функція divide виконує операцію ділення двох чисел
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
 * Перевіряє, чи введене значення є коректним числом
 * @param {string} input - Введене значення
 * @returns {number} Коректне число
 * @throws {Error} Якщо введене значення не є коректним числом
 */
const validateNumberInput = (input) => {
  if (input.trim() === '') {
    throw new Error('Помилка: введено порожнє значення.');
  }

  const parsedNumber = parseFloat(input);
  if (isNaN(parsedNumber)) {
    throw new Error('Помилка: введено некоректне число.');
  }

  return parsedNumber;
};

/**
 * Перевіряє оператор і викидає помилку, якщо оператор некоректний
 * @param {string} operator - Оператор для перевірки (+, -, *, /)
 * @throws {Error} Якщо оператор некоректний
 */
const validateOperator = (operator) => {
  if (!['+', '-', '*', '/'].includes(operator)) {
    throw new Error('Помилка: невідомий оператор.');
  }
};

/**
 * Обчислює результат арифметичної операції
 * @param {number} a - Перше число
 * @param {number} b - Друге число
 * @param {string} operator - Один з операторів: +, -, *, /
 * @returns {number} Результат обчислення
 * @throws {Error} Якщо оператор некоректний
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
      throw new Error('Помилка: невідомий оператор!');
  }
};

/**
 * Запускає калькулятор: запитує вхідні дані, обчислює та виводить результат
 */
const runCalculator = () => {
  try {
    const input1 = prompt('Введіть перше число:', '0');
    const num1 = validateNumberInput(input1);

    const operator = prompt('Введіть оператор (+, -, *, /):', '+');
    validateOperator(operator);

    const input2 = prompt('Введіть друге число:', '0');
    const num2 = validateNumberInput(input2);

    const result = calculate(num1, num2, operator);
    console.log(`Результат: ${result}`);
  } catch (error) {
    console.log(error.message);
  }
};

runCalculator();
