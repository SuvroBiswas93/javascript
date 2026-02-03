// function sum (num1,num2){
//     total = num1 + num2 ;
//     return console.log('the sum of two number is',num1,num2,total)
// }

// // sum(10,0) -----> this give result 
// sum(10) // -----> but this does not give result, the output will be nan


// default parameter
// this is for addition
function sum (num1 = 0, num2 = 0){
    total = num1 + num2 ;
    return console.log('the sum of two number is',num1,num2,total)
}

// sum(10,0) 
sum(10) 

// this is for multiplication

function multiply (num1 = 1, num2 = 1){
    total = num1 * num2 ;
    return console.log('the multiply of two number is',num1,num2,total)
}

// sum(10,0) 
multiply(10) 



const add = (a,b)=>{
    return a+b;
}
console.log(add(5,7))
