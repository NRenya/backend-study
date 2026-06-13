const numbers = [1000,2500,4000,800];
const overNumbers = numbers.filter((price) => {
    return price >= 2000 ;
});
console.log(overNumbers);

//条件を元に該当するものだけを残して配列を組み直す