const numbers = [1000,2000,3000];
const inTax = numbers.map((price) => Math.round(price * 1.1));
console.log(inTax);

//mapはもともとあった配列を並び替えるための道具だね