// function sum (num1,num2){
//     total = num1 + num2 ;
//     return console.log('the sum of two number is',num1,num2,total)
// }

// // sum(10,0) -----> this give result 
// sum(10) // -----> but this does not give result, the output will be nan


// default parameter

function sum (num1 = 0, num2 = 0){
    total = num1 + num2 ;
    return console.log('the sum of two number is',num1,num2,total)
}

// sum(10,0) 
sum(10) 

