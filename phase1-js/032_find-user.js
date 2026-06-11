const users = [
    { id : 1, name : "レン", role : "admin"},
    { id : 2, name : "ナナ", role : "user"},
    { id : 3, name : "タク", role : "user"},
    { id : 4, name : "ミカ", role : "editor"},
]

const searchUser = users.find(user => user.id === 3);
console.log("見つかったユーザー", searchUser);