const user ={
    name: "なかれん",
    age: 29,
    job: "バックエンド学習中",
};
const { name, age, job } = user;
console.log(name);
console.log(age);
console.log(job);
console.log(name + "は" + age + "歳で、" + job + "です。");

//分割代入は必要な情報だけ取り出せる機能でコードをスッキリ見せることができる