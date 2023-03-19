let user = prompt('Enter your Username');
if (user === "Admin") {
    let password = prompt(' Enter your password ');
    if (password === "codecamp6") {
        alert("Wellcome !!");
    }
    else if (password !== "codecamp6" && password !== null) {
        alert("Wrong password");

    }
    else {
        alert("cancel");
    }
}
else if (user !== "Admin" & user !== null) {
    alert("I don't know you");
}
else {
    alert("cancel");
}