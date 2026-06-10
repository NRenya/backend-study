const users = [
    { name: "なかれん", age: 29, job: "バックエンド学習中" },
    { name: "たろう", age: 25, job: "営業" },
    { name: "はなこ", age: 31, job: "デザイナー"}
];
users.forEach((item) =>{
    console.log(item.name + "は" + item.age + "歳で、" + item.job + "です");
});

//オブジェクトも複数の情報を持つ複数の配列の時があってそれをそれぞれ過去に知識で引っ張り出してくるってこともできる。