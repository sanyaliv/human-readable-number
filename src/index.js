module.exports = function toReadable (number) {
  let numbers = {
    "0" : "zero",
    "1" : "one",
    "2" : "two",
    "3" : "three",
    "4" : "four",
    "5" : "five",
    "6" : "six",
    "7" : "seven",
    "8" : "eight",
    "9" : "nine",
  }

  let teens = {
    "10" : "ten",
    "11" : "eleven",
    "12" : "twelve",
    "13" : "thirteen",
    "14" : "fourteen",
    "15" : "fifteen",
    "16" : "sixteen",
    "17" : "seventeen",
    "18" : "eighteen",
    "19" : "nineteen"
  }

  let tens = {
    "2" : "twenty",
    "3" : "thirty",
    "4" : "forty",
    "5" : "fifty",
    "6" : "sixty",
    "7" : "seventy",
    "8" : "eighty",
    "9" : "ninety"
  }

  if (number >= 0 && number <= 9) {
    return numbers[number];
  } else if (number >= 10 && number <= 19){
    return teens[number];
  } else if (number.toString().length === 2 && number % 10 === 0) {
    return tens[number / 10];
  } else if (number.toString().length === 2 && number % 10 != 0){
    let num1 = tens[Math.floor(number / 10)];
    let num2 = numbers[number % 10];
    return `${num1} ${num2}`;
  } else if (number.toString().length === 3 && number % 100 === 0){
    let num = numbers[number / 100];
    return `${num} hundred`
  } else if (number.toString().length === 3 && number % 100 != 0 && number % 100 >= 1 && number % 100 <= 9){
    let num1 = numbers[Math.floor(number / 100)];
    let num2 = numbers[number % 100];
    return `${num1} hundred ${num2}`
  } else if (number.toString().length === 3 && number % 100 != 0 && number % 100 >= 10 && number % 100 <= 19){
    let num1 = numbers[Math.floor(number / 100)];
    let num2 = teens[number % 100];
    return `${num1} hundred ${num2}`
  } else if (number.toString().length === 3 && number % 10 === 0){
    let num1 = numbers[Math.floor(number / 100)];
    let num2 = tens[number % 100 / 10];
    return `${num1} hundred ${num2}`
  } else if (number.toString().length === 3 && number % 10 != 0) {
    let num1 = numbers[Math.floor(number / 100)];
    let num2 = tens[Math.floor(number % 100 / 10)];
    let num3 = numbers[Math.floor(number % 10)];
    return `${num1} hundred ${num2} ${num3}`
  }
}
