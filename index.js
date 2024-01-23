/*

// [] - Обчислювальні властивості

const user = {
    name: 'John' ,// Ключ  'name'  значення 'john'
    'favorite color':'red',
    0: 'value'
}

// Ключем в обʼєкті може бути рядок або тип данних Sumbol

console.log(user.name)

// . - Оператор доступу за імʼям властивості(коли мова йде про валідні ідентифікатори)

//user.'favorite color'; --> SyntaxError
//user.0; --> SyntaxError

//  [] - оператор доступу до обчислювальної властивості(коли мова йде про невалідні ідентифікатори)

console.log(user['favorite color'])

console.log(user[0])

const someObj = {
    2:10
}

console.log(someObj[2])

console.log(someObj['2'])

/*
Задача 
*/
/*
const greets={
    15:'Hi',
    17:'Ya, whats up',
    19:'Hello',
    30:'Good morning'
}

const valueFromUser = 19

console.log(greets[19])
console.log(greets[valueFromUser])
*/

/*
задача у нас є обьект ключем у якого є день тижня а значення - плани на цей день.

Прийняти від користувача через промпт назву дня тижня і видати алерт що заплановано у користувача на цей день
*/
/*
const obj={
    Mon:'drive lesson',
    Tue:'dantist visit',
    Wed:'go to party',
    Thu:'hard work',
    fri:'chill',
    sat:'go to park',
    'favorite color':'white',
    0:'value'

}
*/
//const userValue = prompt('Enter day week')
//alert(obj[userValue])

/*
Оператор in. Бінарний оператор. використовується для перевірки наявності властивості ключа(повертатиме тру або фалсе)
*/

//console.log('Mon' in obj)
/*
function greeting(user){
    return `Hello ${'name' in user ? user.name : 'Anonym'}`

}

const user = {
    name: 'John',
    email:'john.doe@gmail.com'
}
*/

const user = {
    name:'John',
    lastname:'Doe',
    age:20,
    'favorite color': 'red',
    movie: 'Blue moon',
    avatar:'http://....'
}

// for..in - цикл шо використовуеться для перебору ключив в обʼєкті

/*
for(variable in object){
    код шо використовуеться для кожної властивості
}

varible - змінна яка буде приймати значення ключів властивостей
object - об'єкт, властивості(ключі) якого мі хочемо перебрати
*/
/*
for(let key in user){
    console.log(`${key}--->${user[key]}`) //key --->value
}

*/
/*
Задача: Написати функцію яка приймає обʼєкт і виводить всі значення всіх властивостей оформлені *....*
а ключі "..." 
*/
/*
const obj = {
    key1: `value 1`
}

function stylingObject(obj){
    for (let key in obj){
        console.log(`"${key}":*${obj[key]}*`)
    }
}
*/
/*

Задача: у нас є обьект з зарплатами по всім відділам.
Написати функцію яка повертає загальну сумму всіх відділів
*/
const departmentSalaryInCompany1 = {
    HR: 120000,
    development:5000000,
    PR: 50000,
    marketing: 120000,
    assistant: undefined
}

const departmentSalaryInCompany2 = {
    HR: 130000,
    development:5500000,
    PR: 50000,
    marketing: 120000,
    assistant: undefined
}
//
function sumSalary(salaryObject){
    let sum = 0;

    for(let key in salaryObject){
        if(typeof salaryObject[key]==='number'){
        sum += salaryObject[key];
        }
    }
    return sum;
}