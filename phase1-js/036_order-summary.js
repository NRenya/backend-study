const orderList = [
    {productName : "ノート", price : 1200, quantity : 2},
    {productName : "ペン", price : 300, quantity : 5},
    {productName : "バッグ", price : 4500, quantity : 1},
    {productName : "消しゴム", price : 150, quantity : 3}
];
const totalPrice = orderList.reduce((total,item) => {
    return total + (item.price * item.quantity);
}, 0);
console.log("注文金額: " + totalPrice + "円");