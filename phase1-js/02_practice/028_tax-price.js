const productName = "ノート";
const price = 1200;
const tax = 10;

const priceIncludingTax = price + (price * (tax / 100));
console.log( productName + "の税込価格は" + priceIncludingTax + "円です。");