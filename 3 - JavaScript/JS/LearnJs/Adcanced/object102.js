let obj ={
    name : "Watcharapol",
    age : 21,
    address : "Bangkok",
    skill : "JavaScript"
};
//ทดสอบว่ามี Property นั้นอยู่ใน Object หรือไม่
"name" in obj; // true
"age" in obj; // true

let user ={
    name : "Yotadee",
    age : 19,
}

for ( let key in user){
    console.log(key);
}
for ( let key in user){
    console.log(user[key]); // การเข้าถึง Value ของ Property ใน Object
}
for ( let key in user){
    console.log(`Key : ${key} , Value : ${user[key]}`); 
}

const user2 = {
    Nickname : "Far",
    age : 19,
}