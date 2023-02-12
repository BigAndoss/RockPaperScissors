function sumAll(num1,num2) {
    let Sum = 0;

    if (num1 != num2) {
        if (num2<num1) {
            let num3 = num2
            num2 = num1
            num1 = num3 
    }
    for (let i = 0; i < num2; i++) {
        Sum = Sum + num1;
        num1++
        
    }
    
    
    }else {
            return num1
        } ;
    console.log(Sum);
};

console.log(sumAll(100,1));

// function a (a,b){
//     return a+b
// }
// console.log(a(1,2))