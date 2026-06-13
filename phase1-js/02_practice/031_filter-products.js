const items = [
    { name : "ノート", price : 1200},
    { name : "ペン", price : 300},
    { name : "バッグ", price :4500},
    { name : "消しゴム", price : 150},
    { name : "イヤホン", price : 6000}
]
const overItems = items.filter((item)=> {
    return item.price >= 1000 ;
});
console.log("1000円以上の商品", overItems);

// const overItems = items.filter((item)=> {
//     return item.price >= 1000 ;
// });
// filterの中のitemには、items配列の中の商品オブジェクトが1つずつ入る。
// そのitem.priceを見て、1000円以上の商品だけを残す。