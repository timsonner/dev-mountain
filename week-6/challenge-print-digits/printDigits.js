function printDigits(number) {
  let lastDigit;
  result = 0;
  while (number != 0) {
    lastDigit = number % 10;
    result = result * 10 + lastDigit;
    number = Math.floor(number / 10);
  }
  console.log(result);
}

printDigits(1);
printDigits(314);
printDigits(12);
