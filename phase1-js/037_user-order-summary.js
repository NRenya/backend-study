const users =[
    {id: 1, name: "レン",isPremium: true},
    {id: 2, name: "ナナ", isPremium: false},
    {id: 3, name: "タク", isPremium: false}
];
const productList =[
    {id: 1, name: "ノート", price: 1200},
    {id: 2, name: "ペン", price: 300},
    {id: 3, name: "バッグ", price: 4500},
    {id: 4, name: "イヤホン", price: 6000}
];
const orderList =[
    {orderId: 101, userId: 1, productId: 1, quantity: 2},
    {orderId: 102, userId: 1, productId: 3, quantity: 1},
    {orderId: 103, userId: 2, productId: 2, quantity: 5},
    {orderId: 104, userId: 1, productId: 4, quantity: 1},
    {orderId: 105, userId: 3, productId: 2, quantity: 10}
];
const targetUserId = 1;

// targetUserId に一致するユーザーを探す
const targetUser = users.find(user => user.id === targetUserId);

// targetUserIdで見つけたユーザーの中身のid に一致する注文だけ取り出す
const targetOrderList = orderList.filter((order) => {
    return targetUser.id === order.userId;
});

// 各注文の商品情報を productId から探す
const orderItems = targetOrderList.map((order) => {              // mapの中でfindを使うことで、
    const product = productList.find((item) => {                      // 注文1件ごとに対応する商品を探して、新しい配列に変換している
        return item.id === order.productId
    });
    // 各商品の小計は price × quantity で計算する                     
    const prices = product.price * order.quantity;
    // 注文商品一覧をオブジェクトにする
    const items ={
        name : product.name, quantity : order.quantity, price : prices
    };
    return items;
});
// 注文商品一覧は「商品名 x 個数 = 小計円」の文字列配列にする
const targetProductList = orderItems.map((data) => {
    const list = data.name + "×" + data.quantity + "=" + data.price
    return list;
})

// 割引前合計を出す
const beforeTotal = orderItems.reduce((total,item) => {
    return total + item.price;
}, 0);

// isPremium が true の場合は10%割引する
// isPremium が false の場合は割引しない
let afterTotal
if(targetUser.isPremium === true){
    afterTotal = beforeTotal - (beforeTotal * 10 / 100);
}else if(targetUser.isPremium === false){
    afterTotal =beforeTotal;
};

// 割引後合計が10000円以上ならランクは VIP
// それ以外ならランクは NORMAL
let statusRank
if(afterTotal >= 10000){
    statusRank = "VIP";
}else{
    statusRank = "NORMAL";
}

// 最後に指定の形で console.log する
console.log("購入者: " + targetUser.name);
console.log("注文件数: " + targetOrderList.length + "件");
console.log("注文商品:", targetProductList);
console.log("割引前合計: " + beforeTotal + "円");
console.log("割引前合計: " + afterTotal + "円");
console.log("ランク: " + statusRank);