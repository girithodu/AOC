const fs = require("fs");
const { type } = require("os");

const inputFileContent = fs.readFileSync("./intput1.txt", "utf-8");
const inputLines = inputFileContent.split("\n");

const digitMapping = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "55",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const digitOccurrences = {};

for (let line of inputLines) {
  let firstDigit, lastDigit;

  const findDigits = (currentChar, index) => {
    debugger;
    if (!isNaN(currentChar)) {
      return { result: currentChar, index };
    } else if (digitMapping[currentChar]) {
      return { result: digitMapping[currentChar], index };
    }

    if (!isNaN(line[index + 1]) || !line[index + 1]) {
      return;
    }

    const nextChar = currentChar + (line[index + 1] || "");
    return findDigits(nextChar, index + 1);
  };

  for (let i = 0; i < line.length; i++) {
    const currentChar = line[i];
    const output = findDigits(currentChar, i);

    if (output) {
      firstDigit ? (lastDigit = output.result) : (firstDigit = output.result);
    }
  }

  !lastDigit ? (digitOccurrences[line] = firstDigit + firstDigit) : (digitOccurrences[line] = firstDigit + lastDigit);
}
const digitValues = Object.values(digitOccurrences);
const sumOfDigits = digitValues.reduce((accumulator, currentValue) => {
  const int = parseInt(currentValue);
  return isNaN(int) ? accumulator : accumulator + int;
}, 0);
console.log(sumOfDigits);


