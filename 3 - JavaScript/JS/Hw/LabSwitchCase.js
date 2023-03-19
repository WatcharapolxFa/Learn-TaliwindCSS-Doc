//LAB 1
let browser;
if(browser  === 'Edge'){
    alert('You have got the Edge!');
}
else if(browser === 'Chrom' ||browser === 'Firefox'||browser === 'Safari'||browser === 'Opera'){
    alert('Okay we support these browsers too');
}
else{
    alert('We hope that this page looks ok!')
}
//LAB 2
let a = +prompt('a?','') 
switch(a){
    case 0 :
        alert(0);
        break;
    case 1 :
        alert(1);
        break;
    case 2 :
        alert('2,3');
        break;
    case 3 :
        alert('2,3');
        break;
    default :
        alert("no case support")
    }