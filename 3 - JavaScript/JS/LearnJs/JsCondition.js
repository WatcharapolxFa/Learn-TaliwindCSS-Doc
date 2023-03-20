let year = prompt('First year to Codecamp thailand is .... ');

if (year==="2018"){
    alert("ถูกต้อง")
}
else if (Number(year)<2000){
    alert("So far old .... ")
}
else{
    alert("กด F5 เพื่อตอบอีกครั้ง")
}
//Ternary-Operator
let check = (year === "2018") ? 'ถูกต้อง' : 'ไม่ถูกต้อง';
alert(check)

// == เช็คแค่ value อย่างเดียว  === เช็ต value และ type ด้วย

console.log(5 > 4)
console.log("apple" > "pineapple")
console.log("2" > "12")
console.log(undefined == null)
console.log(undefined === null)
console.log("bee" < "be")
console.log("bee" > "Bee")
console.log("Bee" < "be")

