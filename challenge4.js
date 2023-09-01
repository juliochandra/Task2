console.log("<=== FUNCTION CALCULATOR ===>");

let number1 = "10";
let number2 = 2;
let operator = "*";

const calculator = (number1, number2, operator) => {
  if (isNaN(number1) || isNaN(number2)) {
    return "Error Bukan Number";
  }
  if (operator === "+") {
    return number1 + number2;
  } else if (operator === "-") {
    return number1 - number2;
  } else if (operator === "*") {
    return number1 * number2;
  } else if (operator === "/") {
    return number1 / number2;
  } else {
    return "operator salah";
  }
};
console.log(calculator(number1, number2, operator));

console.log("<=== KONVERSI CELCIUS KE FAHRENHEIT ===>");
let temperatureC = 100;
let temperatureF = 100;
const convertTempToF = function (temperatureC) {
  resultF = (temperatureC * 9) / 5 + 32;
  return resultF;
};
const convertTempToC = function (temperatureF) {
  let resultC = ((temperatureF - 32) * 5) / 9;
  return resultC;
};
console.log(convertTempToF(temperatureC));
console.log(convertTempToC(temperatureF));
console.log(" ");

// Currying function
console.log("<=== KORVERSI CELCIUS KE FAHRENHIT DI CURRYING ===>");
let temperature = 100;

const formulaFahrenheit = (temp) => {
  return (temp * 9) / 5 + 32;
};
const formulaCelcius = (temp) => {
  return ((temp - 32) * 5) / 9;
};

const celciusToFahrenheit = (tempeaturInCelcius) => {
  return formulaFahrenheit(tempeaturInCelcius);
};
const fahrenheitToCelcius = (tempeaturInCelcius) => {
  return formulaCelcius(tempeaturInCelcius);
};

const convertedTempInFahrenheit = celciusToFahrenheit(temperature);
const convertedTempInCelcius = fahrenheitToCelcius(temperature);

console.log(convertedTempInFahrenheit);
console.log(convertedTempInCelcius);
