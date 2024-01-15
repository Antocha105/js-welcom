// loop - цикли. 


/*
Задача
Написати функцію яка обчислює факторіал переданого числа, результат виводить на консоль

Якщо відемне число - поверніть помилку
Якщо число = 0 або = 1 - поверніть з функції 1

*/
/*
function factorial(number){
    let res = 1; // Уцій змінній ми будемо накопичувати результат
    for(let it = 1; it <=number; it++) {
        if (number===0 || number===1){
            return 1;
        }else if (number<0){
            return null;
        }else{
            res = res*it;
        }
        
       
} 
return res;
}
console.log(factorial(5));
*/
/*
Задача1
Написати функцію яка приймає два числа(діапазон) і виводить на консоль всі числа з цього діапазону які діляться на 5



*/
/*
function printNumberDivisibleBy5(start,end){
    for(let i=start;i<=end;i++){
        if (i%5===0){
            console.log(i);
    }
}
}

printNumberDivisibleBy5(10,50);
*/
/*
Написати гру физз базз для 100 чисел
Починаючи з 1, потім число поступово інкрементується.
Якшо число ділиться на 3 - гравець каже Фізз
Якщо число ділиться на 5 - нравець каже Базз
Якщо число ділиться на 3 і на 5 - гравець просто називає це число


*/

function fizzBuzzGame(limit){
    for(let i =1; i <=limit; i++){
        if(i%3===0 && i%5===0){
            console.log('FizzBuzz');
        }
        else if(i%3===0){
            console.log('Fizz')
        }
        else if(i%5===0){
            console.log('Buzz');
        
    }
    else{
        console.log(i);
    }
}
}

fizzBuzzGame(100)