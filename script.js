
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');
// console.log('Hello World!!');

for(i=1; i<=5; i++){
    console.log('Hello world');
}

let number = [6, 5, 8, 4, 5, 5, 8, 5,7, 5,7,38,6,36,59,48];
let marks  = [90, 56,78,95,78,60,78,13,65,12,56,43,56,9,67,54,78,32]; //Pass

// console.log(number[0]);
// console.log(number[1]);
// console.log(number[2]);
// console.log(number[3]);
// console.log(number[4]);

let element = number.length;
for(i=0; i<element; i++){
    // console.log(number[i]);
    // console.log(i);
    if(number[i]%2==0){
        console.log(number[i]+'=Even'); // 6=even 5=odd
    }
    else{
        console.log(number[i]+'=Odd');
    }
}

// i=0;
// i=1;
// i=2;
// i=3;
// i=4;
// i=5;
// i=6;
// i=7;
// i=8;

for(i=1; i<=10;i++){
    let x = 10;
    let y = 12;

    let result = x+y;
    console.log(result);
}