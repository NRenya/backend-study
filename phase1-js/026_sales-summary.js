const sales = [
    { shop: "高崎店", amount: 1200 },
    { shop: "高崎店", amount: 3000 },
    { shop: "大宮店", amount: 2500 },
    { shop: "大宮店", amount: 4000 },
    { shop: "新宿店", amount: 5000 }
  ];
//売上合計
const total = sales.reduce((total, store) => {
  return total + store.amount;
}, 0);
//売上件数
const count = sales.length;
//平均
const average = total / count;

console.log("売上合計: " + total);
console.log("売上件数: " + count);
console.log("売上平均: " + average);

const shopTotals = sales.reduce((summary, sale) => {
    //まずここに　もしその店の合計の箱がなければ0を入れる処理をする。"要するに〇〇店の合計0"っていう始まりを作るんだな。
    if (!summary[sale.shop]) {
    summary[sale.shop] = 0;
  }
  //ここで結果としてその作ったスタート地点に順番にその店の売り上げを探してプラスしていく。
  summary[sale.shop] = summary[sale.shop] + sale.amount;

  return summary;
}, {});

console.log("店舗別売上:", shopTotals);

// 空の箱 {} をスタート地点にして、同じ店舗名ごとに売上を足していき、最後に「店舗別の合計表」として出すってこと。