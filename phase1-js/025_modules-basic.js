const userData = require("./025_user-data.js");

console.log(userData.name);
console.log(userData.age);
console.log(userData.job);
console.log(userData.name + "は" + userData.age + "歳で、" + userData.job + "です。");

//const userData = require("./025_user-data.js");はファイルの位置からどうするかによるから同じフォルダに入っていればそれでよし。