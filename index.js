console.log("<=== FSW 38 Julio Chandra Pratama ===>");
console.log(" ");

console.log("<=== MANIPULASI STRING ===>");
let fullName = "Julio Chandra Pratama";
const manipulasiString = function (name) {
  let studentName = name;
  let lengthName = name.length;
  let upperCaseName = name.toUpperCase();
  let lowerCaseName = name.toLowerCase();
  let firstCharName = name[0];
  let nickName = name.substring(0, 5);
  let combinationName = nickName + " " + "Love Javascript";
  let lastCharName = name[name.length - 1];
  return [
    studentName,
    lengthName,
    upperCaseName,
    lowerCaseName,
    firstCharName,
    nickName,
    combinationName,
    lastCharName,
  ];
};
const resultManipulasiString = manipulasiString(fullName);
for (let i = 0; i < resultManipulasiString.length; i++) {
  const result = resultManipulasiString[i];
  console.log(result);
}
console.log("");

console.log("<=== MENGUBAH TIPE DATA  ===>");
let age = "42";
let height = "160";
const mengubahTypeData = function (agePerson, heightPerson) {
  const age = parseInt(agePerson);
  const height = parseFloat(heightPerson);
  return [age, height];
};
const resultMengubahTipeData = mengubahTypeData(age, height);
for (let i = 0; i < resultMengubahTipeData.length; i++) {
  const result = resultMengubahTipeData[i];
  console.log(result);
}
console.log("");

console.log("<=== PENGECEKAN TIPE DATA  ===>");
let data = "Hello World";
const pengecekanTypeData = function (data) {
  return typeof data;
};
console.log(pengecekanTypeData(data));
console.log(" ");

console.log("<=== PENJUMLAHAN DAN PENGURANGAN  ===>");
let num1 = 10;
let num2 = 5;
const penjumlahanDanPengurangan = function (num1, num2) {
  let penjumlahan = num1 + num2;
  let pengurangan = num1 - num2;
  return [penjumlahan, pengurangan];
};
const resultPenjumlahanDanPengurangan = penjumlahanDanPengurangan(num1, num2);
for (let i = 0; i < resultPenjumlahanDanPengurangan.length; i++) {
  const result = resultPenjumlahanDanPengurangan[i];
  console.log(result);
}
console.log(" ");

console.log("<=== PERKALIAN DAN PEBAGIAN  ===>");
let num3 = 6;
let num4 = 2;
const perkalianDanPembagian = function (num3, num4) {
  let perkalian = num3 * num4;
  let pembagian = num3 / num4;
  return [perkalian, pembagian];
};
const resultPerkalianDanPembagian = perkalianDanPembagian(num3, num4);
for (let i = 0; i < resultPerkalianDanPembagian.length; i++) {
  const result = resultPerkalianDanPembagian[i];
  console.log(result);
}
console.log(" ");

console.log("<=== PANGKAT BILANGAN  ===>");
let base = 3;
let exponent = 4;
const pangkatBilangan = function (base, exponent) {
  return Math.pow(base, exponent);
};
console.log(pangkatBilangan(base, exponent));
console.log(" ");

console.log("<=== RATA-RATA DARI ARRAY  ===>");
let numbers = [5, 8, 12, 4, 6];
const rataRataArray = function (numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  let average = total / numbers.length;
  return average;
};
console.log(rataRataArray(numbers));
console.log(" ");

console.log("<=== BILANGAN GANJIL ATAU GENAP  ===>");
let num5 = 12;
const bilanganGanjilGenap = function (num5) {
  if (num5 % 2 === 0) {
    return `angka ${num5} adalah angka genap`;
  } else {
    return `angka ${num5} adalah angka ganjil`;
  }
};
console.log(bilanganGanjilGenap(num5));
console.log(" ");

console.log("<=== RANDOM  ===>");
const randomFuction = () => {
  let randomNumber = Math.ceil(Math.random() * 5);
  return randomNumber;
};
console.log(randomFuction());
console.log(" ");

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

console.log("<=== PANGKAT SEDERHANA ===>");
let angkaBase = 4;
let angkaExponent = 2;

const pangkatSederhana = function (base, exponent) {
  let resultPangkat = Math.pow(base, exponent);
  return resultPangkat;
};
console.log(pangkatSederhana(angkaBase, angkaExponent));
console.log(" ");

console.log("<=== CEK HURUF VOKAL ===>");
let huruf = "g";
huruf = huruf.toUpperCase();
const cekHurufVokal = function (huruf) {
  if (
    huruf === "A" ||
    huruf === "E" ||
    huruf === "I" ||
    huruf === "O" ||
    huruf === "U"
  ) {
    return `${huruf} adalah huruf vokal`;
  } else {
    return `${huruf} bukan huruf vokal`;
  }
};
console.log(cekHurufVokal(huruf));
console.log(" ");

console.log("<=== FUNCTION CALCULATOR ===>");

let number1 = "10";
let number2 = 2;
let operator = "*";

function calculator(number1, number2, operator) {
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
}

const calculator2 = function (number1, number2, operator) {
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
console.log(calculator2(number1, number2, operator));
