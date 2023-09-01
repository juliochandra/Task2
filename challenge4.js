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
console.log("<=== KONVERSI CELSIUS KE FAHRENHEIT DENGAN CURRYING ===>");

let temperature = 100;
let a = 9;
let b = 5;
let c = 32;

const convertToFahrenheit = (temp) => {
  return (a) => {
    return (b) => {
      return (c) => {
        return (temp * a) / b + c;
      };
    };
  };
};

const resultConvertTempInFahrenheit = convertToFahrenheit(temperature)(a)(b)(c);
console.log(resultConvertTempInFahrenheit);
