const messageDate = {
    message: "async awaitでデータ取得成功"
};

const getData = () =>{
    return new Promise((resolve, reject) => {
        resolve(messageDate.message);
      });
};

const main = async () => {
    const result = await getData();
    console.log(result);
};

main();

// Promiseを読みやすく書くための書き方
// .then() は「結果が来たらこの中でやってね」
// await は「結果が来るまでここで待って、次の行に進んでね」
// だから前の行に結果が書いてるよって表記ではなくなるから表記しやすいというか、考えやすい。そしてなにより見やすくなって綺麗なコードになる。