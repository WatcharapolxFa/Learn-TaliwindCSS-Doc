let user = {
    name : "John",
    age : 30,
    skill : "JavaScript"
}
let admin = {};

for (let key in user){
    admin[key] = user[key];
}
user.name = "Ploy";

let obj1 = {
    name : "John",
    age : 30,
    skill : "JavaScript"
}

let obj2 = Object.assign({},obj1);

// สามรถเอา object ซ้อน object ได้
let user ={
    name : "John",
    sizes:{
        height : 182,
        width : 50
    }
};

alert(user.sizes.height); // 182
alert(user.sizes.width); // 50