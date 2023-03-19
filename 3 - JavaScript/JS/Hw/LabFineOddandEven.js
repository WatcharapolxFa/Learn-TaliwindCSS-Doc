//LAB 1 

let i = 3;
// while (i) {
//     console.log(i--);
// }

// LAB 2
    let number = 0 ;
    // while(++number<5) {console.log(number);}
    while(number++<5) {console.log(number);}

//Lab 3
 let player1 = prompt("ป้อนตัวเลขของคุณ 0-100 ",'')
 while(true){
    let player2 = prompt("ป้อนตัวเลขของคุณ 0-100 ",'')
    if(player2 === player1){
        console.log("ถูกต้อง");
        break;
    }
    else if(player2 < player1){
        console.log("ค่าที่ป้อนมาน้อยกว่า");
    }
    else if(player2 > player1)
    {
        console.log("ค่าที่ป้อนมามากกว่า");
    }
 }

//Even
for (let index = 0; index < 10; index++) {
    if(index %2 ===  0)
    {
        continue;
    }
    // console.log(index);
    
}
//Odd
for (let index = 0; index < 10; index++) {
    if(index % 2 !==  0)
    {
        continue;
    }
    // console.log(index);
    
}