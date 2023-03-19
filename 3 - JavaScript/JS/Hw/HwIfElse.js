let msg = Number(prompt("คุณได้คะแนนเท่าไหร่"));
if (msg >= 80) {
    alert("A")
}
else if (msg >= 70 && msg <= 79) {
    alert("B")
}
else if (msg >= 60 && msg <= 69) {
    alert("C")
}
else if (msg >= 50 && msg <= 59) {
    alert("D")
}
else if (msg >= 0 && msg < 50) {
    alert("F")
}
else {
    alert("ป้อนตัวเลขในช่วง 0-100 เท่านั้น")
}