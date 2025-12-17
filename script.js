// function declear

// function attendence(){
//     let atte = 67

//     if(atte > 75){
//         console.log("is available for exam ")
//     }else{
//         console.log("he is not")
//     }

// }

// // function calling
// attendence();

// arguments.

/**
  function funcNAme(arguments){
    // arguments 
  }
 */

// function attendence(atte){
//     if(atte >= 75){
//       console.log("is available for exam ")
//     }else{
//         console.log("he is not")
//     }
// }

// let stuAten = 79
// attendence(stuAten)

// for(stuAtten of stuAtenArray){
//     console.log(stuAtten)
// }

// function attendence(atte){

//     for(stuAtten of atte){
//         if(stuAtten >= 75){
//             console.log("is available for exam ")
//           }else{
//               console.log("he is not")
//           }
//     }

// }

// let stuAtenArray = [80, 79, 76, 55, 90]

// attendence(stuAtenArray)

// write a program to take an array of numbers and print the max form that.

// arr  = [1,22,13,44,5,6,7,0]

// function MaxVal(arr){
//     let max = 0
//     for(elem of arr){
//         if(max < elem){
//             max = elem
//         }
//     }
//     console.log(max)
// }

// let arr  = [1,22,13,44,5,6,7,0]
// MaxVal(arr)

// for in loop

// for(key in atte){
//     console.log(key)
// }

// console.log(atte.raJ)
// console.log(atte["shiv"])

// simple object

const atte = {
  raJ: 78,
  jai: 34,
  rahul: 89,
  shiv: 65,
  joy: 45,
  sam: 90,
};

function attendence(obj) {
  for (name in obj) {
    if (obj[name] > 75) {
      console.log(`${name} is valid for exam`);
    } else {
      console.log(`${name} is not valid for exam`);
    }
  }
}
attendence(atte);

// WAP to print all number who is divisible by 11 in the ranfe of 101 to 501

// write a fnction that print the given string in reverse order.

// let str = "apple"
// opt = "elppa"

function revString(str) {
  rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    console.log(str[i]);
    rev = rev + str[i];
  }
  console.log(rev);
}
a = "hello";
revString(a);

