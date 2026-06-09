const name = "れんくん";
const main = (userName) => {
    let greet = "こんにちは" + userName + "さん";
    return greet;
};
const message = main(name);
console.log(message);

//arrowはfunctionを簡単に短く書くための関数だね、今はわからないけど今後出てくる？