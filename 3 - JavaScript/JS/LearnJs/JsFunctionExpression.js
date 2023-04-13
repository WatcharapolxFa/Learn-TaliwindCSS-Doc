//FunctionExpression ต้องประกาศก่อนเรียกใช้
//Function Expression  เป็น Function ที่สามารถสร้างตัวแปรเพื่อมาเก็บค่าได้
// Ex
let sayHiExpression = function() {
  alert( `Hello sayHiExpression ` );
};// ตัวแปร sayHi จะเก็บค่าเป็น Function ที่สามารถเรียกใช้ได้
// เรียนกใช้
sayHiExpression(); // Hello, John


let sayHiExpressionName = function anyName() {
  alert( `Hello sayHiExpressionName` );
};// ตัวแปร sayHi จะเก็บค่าเป็น Function ที่สามารถเรียกใช้ได้
// เรียนกใช้
sayHiExpressionName(); // Hello, John

//Function Declaration  เป็น Function ปกติ
// Ex
function sayHiDeclaration() {
  alert( `Hello sayHiDeclaration` );
};// เรียกใช้
sayHiDeclaration(); 

