const productPrice = 2500;
const quantity = 3;
const calculateTotal = (price,count) =>{
    return price * count
}
const message = calculateTotal(productPrice,quantity);
console.log("合計金額は" + message + "円です。");