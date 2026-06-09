const sales = 12000 ;
const expenses = 3500 ;
const taxrate = 10 ;

const profit = sales - expenses ;
const tax = sales * taxrate / 100 ;
const salesintax = sales + tax ;

console.log("利益は" + profit + "円です") ;
console.log("税金は" + tax + "円です") ;
console.log("税込売上は" + salesintax + "円です") ;

//numbersは数列