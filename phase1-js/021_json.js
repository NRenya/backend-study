const user ={
    name: "なかれん",
    age: 29,
    job: "バックエンド学習中",
};
const juser = JSON.stringify(user);
const object = JSON.parse(juser);
console.log(juser);
console.log(object.name);
console.log(object.age);
console.log(object.job);
console.log(object.name + "は" + object.age + "歳で、" + object.job + "です。");

//今回は模擬的に行ったがJSON文字列は外部やフロントとのやりとりをする時に使う通信用共通データ
//一度６行目で文字列を模擬的にJSONにしてこれでデータが送られてきたという体。
//そのデータをオブジェクトに直して処理できる形に変えて出力する方法