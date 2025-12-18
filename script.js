// // function declear

// // function attendence(){
// //     let atte = 67

// //     if(atte > 75){
// //         console.log("is available for exam ")
// //     }else{
// //         console.log("he is not")
// //     }

// // }

// // // function calling
// // attendence();

// // arguments.

// /**
//   function funcNAme(arguments){
//     // arguments 
//   }
//  */

// // function attendence(atte){
// //     if(atte >= 75){
// //       console.log("is available for exam ")
// //     }else{
// //         console.log("he is not")
// //     }
// // }

// // let stuAten = 79
// // attendence(stuAten)

// // for(stuAtten of stuAtenArray){
// //     console.log(stuAtten)
// // }

// // function attendence(atte){

// //     for(stuAtten of atte){
// //         if(stuAtten >= 75){
// //             console.log("is available for exam ")
// //           }else{
// //               console.log("he is not")
// //           }
// //     }

// // }

// // let stuAtenArray = [80, 79, 76, 55, 90]

// // attendence(stuAtenArray)

// // write a program to take an array of numbers and print the max form that.

// // arr  = [1,22,13,44,5,6,7,0]

// // function MaxVal(arr){
// //     let max = 0
// //     for(elem of arr){
// //         if(max < elem){
// //             max = elem
// //         }
// //     }
// //     console.log(max)
// // }

// // let arr  = [1,22,13,44,5,6,7,0]
// // MaxVal(arr)

// // for in loop

// // for(key in atte){
// //     console.log(key)
// // }

// // console.log(atte.raJ)
// // console.log(atte["shiv"])

// // simple object

// // const atte = {
// //   raJ: 78,
// //   jai: 34,
// //   rahul: 89,
// //   shiv: 65,
// //   joy: 45,
// //   sam: 90,
// // };

// // function attendence(obj) {
// //   for (name in obj) {
// //     if (obj[name] > 75) {
// //       console.log(`${name} is valid for exam`);
// //     } else {
// //       console.log(`${name} is not valid for exam`);
// //     }
// //   }
// // }
// // attendence(atte);

// // WAP to print all number who is divisible by 11 in the ranfe of 101 to 501

// // write a fnction that print the given string in reverse order.

// // let str = "apple"
// // opt = "elppa"

// // function revString(str) {
// //   rev = "";
// //   for (let i = str.length - 1; i >= 0; i--) {
// //     console.log(str[i]);
// //     rev = rev + str[i];
// //   }
// //   console.log(rev);
// // }
// // a = "hello";
// // revString(a);



// // write a function that return the no. of vowels in a string args. 
// // function find(str){
// //    const vowels="aeiouAEIOU";
// //    let count = 1;
// //    for(let char of str){
// //      if(vowels.includes(char)){
// //         count++
// //      }
// //      return count
// //    }
// // 

// // console.log()
// let str  = "this is man"

// function countVowel(str){
//     let count = 0;

//     for(let i =0;i<str.length;i++){
//         console.log(str[i])
//         if(str[i] == 'a' ||str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u' 
//            ){
//             count =  count +1
//            }
//     }

//     console.log(count)
// }

// // countVowel(str)




// // function expression. 

// // diff way to write a function. 



// // function of sum of two numbers 


// // function funcName(){

// //     // task 
// // }


// let sum  = function (num1 , num2){
//     console.log(num1 +num2)
// }


// let mul = function(num1 , num2){
//     console.log(num1* num2)
// }


// // sum(2,3)
// // mul(2,3)


// // write  a function that return all the number in an array who are greater then the given num. 



// // arr = [12,3,4,5,6]  el = 3
// // 4,5,6,12

// let arr = [12,3,4,5,6]
// let el = 3
// let greaterNum = function(arr, el){
//     for(let i =0; i< arr.length;i++){
//         if(arr[i] > el){
//             console.log(arr[i])
//         }
//     }
// }


// // greaterNum(arr, el)




// // scope in js. 

// // scope determines the accessibility of object variable , function in different part of code. 



// // {

// //     let animal = "lion"
// //     console.log(animal) // error
// //     animal = "tiger"
// //     console.log(animal)

// //     let fruit = "mango"

// //     {
// //         console.log(fruit)
// //     }
// // }

// // console.log(animal) // error


// // function outer(){
// //     let a = 10;
// //     let b = 20;
// //     console.log(a)

// //     function inner(){
// //         console.log(b)
// //         let c = 30
// //     }
// //     inner()

// //     console.log(c) // here it gives error
// // }

// // outer()
// // console.log(a) // error or value


// function one(){
//     let a = 10;
//     let b = 20;

//     function two(){
//         console.log(a+b)
//         var c = 30;
//     }
//     // function call for two is missing
//     console.log(c) // it gives error.
//     console.log(a)
// }

// // one()


// // return keyword is used to return some value form the functon. 

// function retrunSum(a,b){
//     let sum = a+b
//     return sum // 
// }

// // let res = retrunSum(10,20)
// // console.log(res)

// // task write a function that retun the concatenation of all the strings in an array. 


// // let array = ["hello" , " this is ", "nice ", " day"]

// // str = "hello this is nice day" 

// let array = ["hello" , " this is ", "nice ", " day"]
// let stringres = ""
// for(let i = 0 ;i < array.length ;i++)
// {
//     stringres += array[i]
//     console.log(array[i])
// }

// console.log(stringres)


// HOF

function greet(userName,userName2, value1, value2){ // name = raj
    userName(value1) // this is function  --> userName("raj")
    userName2(value2)
}

function userName(name){
    console.log("hi", name)
}

function userName2(name){
    console.log("hi", name)
}

// greet(userName,userName2, "raj", "joy")


// hello raj  hello rahul how are you


// higher (num1, num2, operation) // add, sub, mul , div

function calc(val1, val2, operation){ // 12, 12, addition
    let res = operation(val1, val2) // addition(12,12)
    console.log(res)
}


function addition(a,b){
    return a+b  // 24
}
function substraction(a,b){
    return a-b
}
function multiplication(a,b){
    return a*b
}
function division(a,b){
    return a/b}


// calc(12, 12, addition)
// calc(12, 12, multiplication)
// calc(12, 12, substraction)

function evenorodd(a,b){
    if (a%2==0){
        console.log(a,"is even")

    }else{
        console.log(a,"is not even")
    }
    if (b%2==0){
        console.log(b,"is even")

    }else{
        console.log(b,"is not even")
    }
}
function calc2(call,a,b){
    call(a,b)
}

// calc2(evenorodd,10,7)
// function evenOdd(n,callback){
//     callback(n);

// }
// function ch(n){
//     if (n%2==0){
//         console.log(n +"is even")

//     }
//     else{
//         console.log(n + "is odd")
//     }
// }
// evenOdd(123,ch);


// HOF that return a function as result. 


function factory(reqest){
    if(reqest == "multipleOfEleven"){
        return function(n){
            console.log(n%11 == 0)
        }
    }else if(reqest == "multipleOften"){
        return function(n){
            console.log(n%10 == 0)
        }
    }else if(reqest == "even"){
        return function(n){
            console.log(n%2 ==0)
        }
    }else if(reqest == "odd"){
        return function(n){
            console.log(n%2 != 0)
        }
    }else if(reqest == "table"){
        return function logic(n){
            for (i=1; i<=10; i++){
                console.log(n*i);
            }
        }
    }
}

let result = factory("multipleOfEleven")
let result2 = factory("multipleOften")

result(22)
result2(1001)


let result3 = factory("table")
// result3(3)


