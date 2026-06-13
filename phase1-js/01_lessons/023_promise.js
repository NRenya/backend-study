//自分の書いたもので失敗例
// const messe = {
//     message: "データ取得成功"
// }
// const pmessage = new Promise((resolve, reject) => {
//     resolve(massage);
// });
// pmessage.then((massage) => {
//     console.log(massage)
// });

const messe = {
message: "データ取得成功",
};

const pmessage = new Promise((resolve, reject) => {
resolve(messe.message);
});

pmessage.then((result) => {
console.log(result);
});

//時間のかかる処理を後で受け取る仕組み
//まずresolve()で情報を渡す。そして.then()で情報を受け取って処理する。
//これの役立つのはすぐに処理を進められない時に使う
//例えばAPIからデータを取る,データベースからユーザーを探す,ファイルを読み込む,外部サービスに問い合わせるなど答えが返ってきたらそこからまた表示するとか処理を行う時に使うものだね。