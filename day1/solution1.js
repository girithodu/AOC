const fs = require("fs");
const { type } = require("os");

const file = fs.readFileSync("./input1.txt", "utf-8");
const arr = file.split("\n");
const hashMap = {};
console.log(arr);
// loop the array
// at each item will keep track of first and last digit
// at each digit parse it
// check if it is a number
// loop through item , when first digit is found assign it
// keep going through i

for (let cal of arr) {
  let first;
  let last;
  for (char of cal) {
    const int = parseInt(char);
    if(!isNaN(int)) {
      first ? last= int.toString() : first =int.toString();
    }
  }
  !last ? hashMap[cal] = first + first : hashMap[cal] = first + last;
}
const values = Object.values(hashMap);

const output = values.reduce((accumulator, currentValue) =>{
  const int = parseInt(currentValue);
  return accumulator+int;
}, 0);

console.log(output);
