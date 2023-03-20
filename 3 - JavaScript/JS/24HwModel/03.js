function draw(n) {
    let star = ''
    for (let colum = 0; colum < n; colum++) {
        star = star + colum;
    }
    for (let row = 0; row < n; row++) {
        console.log(star);
    }
}
