/*
Q2. Write a recursive function to calcilate multiplication of numbers?
Example:4x3x2x1
*/

function calculate(number1){
    var res=1;
    // for(;number1>0;number1--){
    //     res=res*number1;
    // }

    while(number1>0){
        res=res*number1;
        number1--;
    }

    return res;
}

console.log(calculate(5));