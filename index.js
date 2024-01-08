/*
Задача.

ПОтрібно написаті в когсолі 10 разів цифру 1.

while(кількість_консоль_логів < 10){
    console.log(1);
    КІлькість консоль логів++

}


*/

 let iterator = 0; // Лічильник консоль логів

 //Ітерація - один прохід циклу
/*

 while(iterator<10){
    console.log(iterator);
    iterator++
 }
 */
 //Нескінченний цикл

 /*
 while(true){
    console.log('Не вірно');   //Один раз не вірно буде віведено в консоль
    break;

 }
 //Задача  зробити 10 повторів (ітерацій) циклу і вивести на консоль парні значення лічильника

 let i = 0;

 while(i < 10){
    if(i%2===0){
        console.log(i);
    }
    i++;
 }
*/
/*

let i = 0;

while(true){ //Безкінечний цикл
    i++;
}
*/

/*
Дано правільній пароль = qwerty1234

Запитуйте у користувача через промт пароль поки він не співпаде

*/

const correctPass = 'qwerty1234'


let userPass  = prompt('Введіть свій пароль');

while(userPass !==correctPass){
    userPass = prompt('помилка! Ввведіть ще раз.')
}


/*
while (true){
    const userPass === prompt('Введіть свій пар');
    if(userPass === correctPassword){
        break;
    }
}
*/
/*
let isPasswordCorrect = false;


while (!isPasswordCorrect) {
    const userPass = prompt('Введіть свій пароль');

    if(userPass === correctPass){
        isPasswordCorrect = true;
    }
    
}
*/