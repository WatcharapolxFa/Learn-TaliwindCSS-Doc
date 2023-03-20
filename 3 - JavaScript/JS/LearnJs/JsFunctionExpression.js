sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

//FunctionExpression ต้องประกาศก่อนเรียกใช้
sayHi("John"); // error!

let sayHi = function(name) {
  alert( `Hello, ${name}` );
};
