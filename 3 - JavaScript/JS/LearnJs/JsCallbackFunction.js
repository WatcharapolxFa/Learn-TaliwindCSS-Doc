function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no();
}
function showOk() {
    alert("You agreed.");
}
function showCancel() {
    alert("You canceled the execution.");
}

function showOk2(){
    alert("You agreed2.");
}
// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk2, showCancel);
