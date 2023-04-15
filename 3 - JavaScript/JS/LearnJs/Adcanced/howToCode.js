// การเขียน code ที่ดีและอ่านง่าย
// ไม่ต้องเว้นระหว่างชื่อฟังก์ชั่นกับวงเล็บ รวมถึง Parameter ด้วย
// ปีกกาอยู่บรรทัดเดียวกันหลังจากเว้นช่องว่าง

function pow(x, n){
    let result = 1; // อะไรที่ทำงานในฟังก์ชัน จะต้องย่อหน้าเข้าไปด้วย

    for (let i = 0; i < n; i++){    // เว้นช่องหลังจากคำสั่ง for หรือ while หรือ if
        result *= x; // ใส่ ; ทุกครั้งที่เขียนคำสั่งจบ
    }

    return result;
}

let x = prompt("x?", '');//ใส่ช่องว่างระหว่าง Parameter
let n = prompt("n?", '');
// เว้นบรรทัด แต่ละ Logical Block ให้เห็นชัด
if (n < 0) {
    alert('Power ${n} is not supported, please enter a non-negative integer number');
} else { // else ไม่ขี้นบรรทัดใหม่
    alert( pow(x, n) );// มีช่องว่างระหว่างชื่อฟังก์ชั่นกับวงเล็บถ้าเรียกซ้อนกัน
}

//Curly Braces (วงเล็บปีกกา)
//if มีคำสั่งเดี่ยวไม่ต้องใส่วงเล็บปีกกา
if(n<0){alert('Power ${n} is not supported');} // ไม่ควรเขียนแบบนี้
if(n<0) alert('Power ${n} is not supported'); // ควรเขียนแบบนี้

//Line Length(ความยาวของบรรทัด)
if (
    id === 123 &&
    moonPhase === 'Waning Gibbous' &&
    zodiacSign === 'Libra'
){
    letTheSorceryBegin();
}

//Nesting Levls (ระดับการซ้อนกัน)

for (let i = 0; i < 30; i++) {
   if (i % 2 === 0 ) console.log(i);
}
// เขียนให้ดีกว่านี้คือ

for (let i= 0; i <30; i++){
    if (i % 2 !== 0) continue;
    console.log(i);
}
