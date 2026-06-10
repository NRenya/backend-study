const today = new Date("2026-06-10");
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDate();
console.log(year + "年");
console.log(month + "月");
console.log(day + "日",);
console.log("今日は" + year + "年" + month + "月" + day + "日です。");

//new Date()は中身が空の場合、自動的に今日の日付を拾ってくれる。
//月は0~11で12ヵ月を取るから+1が必要