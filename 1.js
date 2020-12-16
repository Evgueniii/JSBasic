// 1. С помощью цикла while вывести все простые числа в промежутке от 0 до 100.
const checkSimpleNum = (num) => {
   for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let a= 2;
let j = 2;

const simpleNumArray = (num) => {
  const arr = [];
  let i = 2;
  while (i <= num) {
    if (checkSimpleNum(i)) {
      arr.push(i);
    }
    i++;
  }
  return arr;
}
while (a<=100) {
    nextNum:
    for (a = 2; a<=100; a++) {

console.log('Вывод массива простых чисел от 0 до 100: ' + simpleNumArray(100));
        for (j=2; j<a; j++) {