console.log("<=== FSW 38 Julio Chandra Pratama ===>");
console.log(" ");

console.log("<=== MANIPULASI STRING ===>");
let fullName = "Julio Chandra Pratama";
let lengthName = fullName.length;
let upperCaseName = fullName.toUpperCase();
let lowerCaseName = fullName.toLowerCase();
let firstCharName = fullName[0];
let nickName = fullName.substring(0, 5);
let combinationName = nickName + " " + "Love Javascript";
let lastCharName = fullName[fullName.length - 1];

console.log(fullName);
console.log(lengthName);
console.log(upperCaseName);
console.log(lowerCaseName);
console.log(firstCharName);
console.log(nickName);
console.log(combinationName);
console.log(lastCharName);
console.log(" ");

console.log("<=== MENGUBAH TIPE DATA  ===>");
let age = "42";
age = parseInt(age);
let height = "160";
height = parseFloat(height);

console.log(age);
console.log(height);
console.log(" ");

console.log("<=== PENGECEKAN TIPE DATA  ===>");
let data = "Hello World";

console.log(typeof data);
console.log(" ");

console.log("<=== PENJUMLAHAN DAN PENGURANGAN  ===>");
let num1 = 10;
let num2 = 5;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(" ");

console.log("<=== PERKALIAN DAN PEBAGIAN  ===>");
let num3 = 6;
let num4 = 2;

console.log(num3 * num4);
console.log(num3 / num4);
console.log(" ");

console.log("<=== PANGKAT BILANGAN  ===>");
let base = 3;
let exponent = 4;

console.log(Math.pow(base, exponent));
console.log(" ");

console.log("<=== RATA-RATA DARI ARRAY  ===>");
let numbers = [5, 8, 12, 4, 6];
let total = 0;
for (let number of numbers) {
  total += number;
}
let average = total / numbers.length;
console.log(numbers);
console.log(average);
console.log(" ");

console.log("<=== BILANGAN GANJIL ATAU GENAP  ===>");
let num5 = 7;
if (num5 % 2 === 0) {
  console.log(`angka ${num5} adalah angka genap`);
} else {
  console.log(`angka ${num5} adalah angka ganjil`);
}
console.log(" ");

console.log("<=== RANDOM  ===>");

let randomNumber = Math.ceil(Math.random() * 5);
console.log(randomNumber);
