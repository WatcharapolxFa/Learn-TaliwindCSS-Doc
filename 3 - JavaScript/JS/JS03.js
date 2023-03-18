let x = 25
let y = 25.5
let z = x + y
let q = x - y
console.log(z)
console.log(q)
let name = "Watcharapol"
let lastname = "Yotadee"
console.log(name + " " + lastname)

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


let names = "Codecamp"

console.log(`hello ${1}`)
console.log(`hello ${"name"}`)
console.log(`hello ${names}`)


//Convert   String(x)   Number(x)





// + เท่านั้นที่เอา string มาต่อถ้าเป็นตัวอื่นจะทำเลยเช่น  console.log("2"*"2") = 4 เลย


// == เช็คแค่ value อย่างเดียว  === เช็ต value และ type ด้วย

console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log("bee" < "be")
console.log("bee" > "Bee")
console.log("Bee" < "be")