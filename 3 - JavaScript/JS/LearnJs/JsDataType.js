//Convert   String(x)   Number(x)
// + เท่านั้นที่เอา string มาต่อถ้าเป็นตัวอื่นจะทำเลยเช่น  console.log("2"*"2") = 4 เลย
//typeof เอาไว้เช็ตประเภทของตัวแปร แต่ตอนใช้ให้ค่าเป็น String
//NaN => Not a Number

// `` นิยมใช้มากกว่าเพราะ แทรกข้อความได้ทุกทึ่ 
let nickname = `Far`
let fullName = `Hi I name is ${name} ${lastname} I nickname is ${nickname} `
console.log(fullName)

let checkNumber = 5
console.log(checkNumber < 5)
console.log(checkNumber === 5)
console.log(checkNumber >= 5)

// LAB
let names = "Codecamp"

console.log(`hello ${1}`)
console.log(`hello ${"name"}`)
console.log(`hello ${names}`)