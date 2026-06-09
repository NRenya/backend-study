const numbers = [1000,2500,4000,800];
const sum = numbers.reduce((total, price) => {
    return total + price ;
}, 0);
console.log("合計は" + sum + "円です") ;