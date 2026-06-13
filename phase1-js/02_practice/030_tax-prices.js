const priceLists = [1000, 2500, 4000];
const tax = 10;

const prices = priceLists.map((price) => Math.round( price + price * (tax/100)));
console.log("税込一覧: " , prices);

//+でログ出すと文章に、,で出すと並べては列をそのまま出してくれる。