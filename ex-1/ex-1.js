function check(arr, text) {
  const checkText = arr.includes(text) ? "Yes" : "No";
  const checkNumberOfText = arr.split(text).length - 1;
  const checkPosition = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === text) {
      checkPosition.push(i);
    }
  }
  return { checkText, checkNumberOfText, checkPosition };
}
const arr = "asdfqwertxttcvuij";
const text = "t";
const result = check(arr, text);

console.log(
  `Has a "${text}" result.checkText: ${result.checkText}, Occurs: ${result.checkNumberOfText}, Positions: ${result.checkPosition}`
);

const word = "hello world";
const letters = [];

for (let i = 0; i < word.length; i++) {
  letters.push(word[i]); // เพิ่มตัวอักษรที่ตำแหน่ง i ลงในอาเรย์
}

console.log(letters); // ผลลัพธ์: ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d"]
