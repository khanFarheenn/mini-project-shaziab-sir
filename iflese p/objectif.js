// 1Write a program to determine if a number is positive, negative, or zero. If the number is positive, check if it is even or odd.

// let num = prompt("enter the number ")
// if (num>0){
//     console.log("number is positive");
//     if(num%2===0){
//         console.log("number is even");
//     }
//     else{
//         console.log("number is odd");
//     }
        

// }
// else if(num<0){
//     console.log("number is negative");

// }
// else{
//     console.log("number is zero");
// }








// let age =prompt("enter the age")
// if(age>=18){
//     console.log("your a adult");
//     if(age>60){
//         console.log("you are senier citizen");
//     }
// }else if(age<18){
//     console.log("you are a child")
//     if(age<10){
//         console.log("you are child under the 10");

//     }
// }
// else{
//     console.log("invaild age");
// }
// Create a program that reads an input temperature: if it's above 0 degrees Celsius, check if it's above 30 degrees for a 'hot' message. If it's below 0, check if it's below -10 for a 'very cold' message.
// let tem =prompt("enter the temperatures")
// if(tem>0){
//     if(tem>30){
//         console.log("tem is very hot");
//     }
//     else{
//         console.log("tem is not hot ");
//     }
// }
// else{
//     if(tem<-10){
//         console.log("tem is very cold");
//     }
//     else{
//         console.log("tem is  not cold ");
//     }
// }














// ====matrix 4*4=============

// let rows =4;
// let column =4;
// for (let i = 0; i < rows; i++) {

//     let  element = "";
//     for (let j = 0; j < column; j++) {
//          element += "*";
      
        
//     }
//     console.log(element);
// }
//  for(let i=0; i<=5;i++){
//     if(i==2){
//         continue;
//     }
//     console.log(i);
//  }


//  for(let j=0; j<=5;j++){
//     if(j==3){
//         break;
//     }
//     console.log(j);
//  }


let word=['a','e','i','o','u']

switch (word) {
    case 'a':
        console.log("value is vowel");
        break;
    case 'e':
        console.log("value is vowel");
        break;
    case 'i':
        console.log("value is vowel");
        break;
    case 'o':
        console.log("value is vowel");
        break;
    case 'u':
        console.log("value is consonent");
        break;

    default:
        break;
}