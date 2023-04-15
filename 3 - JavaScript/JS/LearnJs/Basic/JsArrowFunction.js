//Arrow function คือ การเขียนฟังก์ชันแบบย่อ โดยไม่ต้องใช้คำว่า function และไม่ต้องใช้ return และไม่ต้องใช้ { } ในกรณีที่มีการ return ค่าเดียว และไม่ต้องใช้ ; ในกรณีที่มีการเขียนในบรรทัดเดียวกัน
let sum = (a, b) => a + b;

let evenOdd = (n) => {
    if (n % 2 == 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
let evenOdd2 = (n) => (n % 2 == 0) ? "Even" : "Odd";

// LAB
let ask = (question,yes,no) => {
    if (confirm(question)) yes()
    else no();
}

ask("Do you agree?", () => alert("You agreed."), () => alert("You canceled the execution."));