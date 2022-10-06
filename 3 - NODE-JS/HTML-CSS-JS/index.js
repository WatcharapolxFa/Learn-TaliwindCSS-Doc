function changeColor() {

    let tcolor = document.querySelector('#inputone').value
    let bcolor = document.querySelector('#inputtwo').value

    document.querySelector('h2').style.color = tcolor
    document.querySelector('h2').style.backgroundColor = bcolor
}