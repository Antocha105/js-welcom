/*
function saySomething (howToSay,whatToSay){
    howToSay(whatToSay)
}
//saySomething(alert,'Hello user')
//saySomething(cosole.log,'Hiiii!')

//HOF - Hight Orrder Function

/*
callback - Функція зворотнььго виклику
*/

//array.forEach - використовуеться для перебору кожного елементу масиву і виконання певної дії
//array.forEach(Callback)
/*
const array = [1,2,3,4,5]
function square(a){
    console.log(a*a)
}
array.forEach(square)

//Еквівалент
for(let i = 0;i<array.length; i++){
    square(array[i])
}

array.forEach(item,index,array =>{
    console.log(item*item)
})

const square =(num)=>num*num


//array.map - працює як forEach, тільки повертатиме новій масив

function square(a){
    return a*a
}



const newArray = array.map((square) => {
    return item*item
})
*/
// коли ми використовуємо мап, в такому випадку значення яке ві повертаєте з ретерн з колбеку воно і буде входити в результуючий масив


// 
/*
const users = [{
    name:'John',
    lastname:'Doe',
    age: 19,
    email:'john.doe@gmail.com'
},{
    name:'Jane',
    lastname:'Doe',
    age: 22,
    email:'jane.doe@gmail.com'
},{
    name:'Jackson',
    lastname:'Doe',
    age: 55,
    email:'jackson.doe@gmail.com'
}]
*/
//Збільшити вік користувачів на 1

//Variant 1
/*
function plusOneYear(item){
    item. age+=1
}
users.forEach(plusOneYear)
//Variant 2
users.forEach((item) => item.age +=1)
console.log(users)

/*
Задача 2. зробити новій масив +100

*/

const array = [2,44,11,234,8,2,4,1]

const newArray = array.map((item) =>  item+100)

/*Задача 3. На основі масиву обьєктів потрібно створити новій масив користувачів, обьекти мать бути у такому вигляді

{
    fullname:''
    emeil:''
}

*/
const users = [{
    name:'John',
    lastname:'Doe',
    age: 19,
    email:'john.doe@gmail.com'
},{
    name:'Jane',
    lastname:'Doe',
    age: 22,
    email:'jane.doe@gmail.com'
},{
    name:'Jackson',
    lastname:'Doe',
    age: 55,
    email:'jackson.doe@gmail.com'
}]

function newUserObject(user){
    return{
        fullName:`${user.name} ${user.lastname}`,
        email: user.email
    }
}

const newUsers = users.map(newUserObject)