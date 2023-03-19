let sum = 0 ;
while (true) {
    let number =  +prompt("Enter number is Sum : ",'');
    //if(ใส่ 0 จะเป็น flaseเจอ ! จะจบการทำงาน แต่ใส่ตัวอื่นจะเป็น True เจอ flase มันก็ทำต่อ)
    if(!number){
        break ;
    }
    sum += number;
}