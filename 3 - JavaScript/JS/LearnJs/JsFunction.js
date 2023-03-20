

let myName = "Far";

// function ไม่คืนค่าไม่รับค่าเข้า
function showName() {
    console.log("Watcharapol");
}
//showNames();


// function ไม่คืนค่า รับค่าเข้า
function showMessage(from, text = "No Text") {
    from = '*' + from + '*';
    alert(from + ':' + text);
    alert
}
// showMessage(myName,"Hello");
// alert(myName);


// function คืนค่า รับค่าเข้า
function sum(a, b) { return a + b; }
let result = sum(2, 4);
console.log(result);

function evendOdd(num) {
    return (num === 0) ? "ศูนย์" : (num % 2 === 0) ? "เลขคู่" : "เลขคี่"
}








//=================================================== Ex ======================================
function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Do you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Access denied');
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }

    alert("Showing you the movie"); // (*)
    // ...
}
