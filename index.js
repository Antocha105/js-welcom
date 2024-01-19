/*
Всередині алерту віконати математичній розрахунок: 2+2=4

*/

//alert('2+2='+(2+2))

//Подвійні лапки: "Привіт"
//Одинарні лапки: 'Привіт'
//Зворотні лапки: ʼПРивітʼ -->Шаблонний вираз- дозволяють вбудовувати обчислювальні вирази в строчку.

//Вираз вкладаеться в ${...вираз...}

//Рядки які знаходяться у зворотніх лапках називаються шаблонніми рядками
//const nickname = 'Vasia';

//задача зробити алерт і привітатися з васею

//alert('Привіт, '+ name + '!');

//Вираз  вкладається в таку фігуру

//alert(`Привіт, ${nickname}!`); //Шаблонній рядок

//alert(`REZYLITAT: ${1+2}!`); 

//Запитати у користувача 2 числа та вивести відповіть алертом

//const first = Number(prompt('Enter first number:'))
//const second = Number(prompt('Enter second number:'))

//alert(String(first) + '+' + String(second) + '=' + String(first+second))

//alert(`${first} + ${second} = ${first + second}`)



function greetingUser(user){
    return `Привіт ${user.name + user.surname},  у наступному році тобі виповниться ${user.age + 1}!`

    


}
const user = {
    name: 'John',
    surname: 'Doe',
    age: 19
}

greetingUser(user)
