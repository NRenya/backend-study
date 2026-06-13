const user = {
    name : "レン",
    age : 30,
    role : "backend learner",
    isActive: true
};
const { name, age, role, isActive } = user;

let status;
if(isActive === true){
    status = "アクティブ"
}else{
    status = "停止中"
}
console.log( name + "さんは" + age + "歳です。役割は" + role + "です。現在" + status + "です。");

// if(isActive === true){
//     const status = "アクティブ"
//     console.log( name + "さんは" + age + "歳です。役割は" + role + "です。現在" + status + "です。");
// }else{
//     const status = "停止中"
//     console.log( name + "さんは" + age + "歳です。役割は" + role + "です。現在" + status + "です。");
// }