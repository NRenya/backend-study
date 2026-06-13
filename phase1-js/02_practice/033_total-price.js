const amounts =[1200,3000,2500,4000,800];
const totalAmount = amounts.reduce((total , amount) => {
    return total + amount;
}, 0);
console.log("合計金額: " + totalAmount + "円");