// loop - цикли. 


/*
Задача
Написати функцію яка обчислює факторіал переданого числа, результат виводить на консоль

Якщо відемне число - поверніть помилку
Якщо число = 0 або = 1 - поверніть з функції 1

*/

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
console.log(factorial(5))