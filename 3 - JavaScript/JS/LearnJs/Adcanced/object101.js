// Object ประกรอบด้วย Property 
//ซึ้ง Property ประกอบด้วย Key และ Value
let user = {
    // Key คือ name และ age
    // Value คือ John และ 30
    name : "John",
    age : 30
};
// การเข้าถึง Property ของ Object ใช้ . หรือ []
// การใช้ . เข้าถึง จะใช้งานตามตัวอย่างนี้
console.log(user.name);
console.log(user.age);
user.height = 176;
// การใช้ [] เข้าถึง จะใช้งานตามตัวอย่างนี้
console.log(user["name"]); //การใช้ [] จะใช้ Key ในการเข้าถึงจะต้องใช้ String เท่านั้น คือต้องมี ""

let user2 = new Object(); // การสร้าง Object ใหม่ แบบ Object Constructor
let user3 = {}; // การสร้าง Object ใหม่ แบบ Object Iteral

// Worksheet
human ={
    name : "Watcharapol",
    age : 21,
    isSingle :true,
    myIntelligent: 8,
};

//Home Work
//1

let obj = {};

let key = prompt("Enter Key");

while (key !== "stop"){
    let value = prompt("Enter value");
    obj[key] = value;
    key = prompt("Enter Key");
}

console.log(obj);

// 2

let obj2 = {};

let key2 = prompt("Enter fruit's name");

while (key2 !== "stop"){
    let value2 = prompt('Enter the number of ${key2}');
    if (Number (value2) > 1  ){
        key2 = key2 + "s";
    }
    obj2[key2] = value2;
    key2 = prompt("Enter fruit's name");
}

console.log(obj2);