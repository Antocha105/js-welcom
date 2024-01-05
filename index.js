
function sum(a,b){
    return a+b;
}

console.log(sum(2,2)); //Детермінована функці

let variable = 5;

function addNumberSomeVariable(number){ //Недетермінована функція
    return number + variable
}

console.log(addNumberSomeVariable(5)); //10
console.log(addNumberSomeVariable(5));
console.log(addNumberSomeVariable(5));
console.log(addNumberSomeVariable(5));

variable = 20;

console.log(addNumberSomeVariable(5)); //25