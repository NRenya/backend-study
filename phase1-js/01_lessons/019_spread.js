const olditem = {
    name: "ノートPC",
    price: 120000,
    stock: 5
};
const newitem = {
    ...olditem,
    price: 98000,
    stock: 3
};
console.log( olditem.name + "の価格は" + olditem.price + "円で、在庫は" + olditem.stock + "個です。");
console.log("更新後：" + newitem.name + "の価格は" + newitem.price + "円で、在庫は" + newitem.stock + "個です。");

//スプレッド構文はこの書き方をすると、元のデータを壊さずに更新できると