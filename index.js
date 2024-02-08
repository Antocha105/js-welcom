'use strict';

// Написати функцію суми двох аргументів

function sum(a,b){ //Function deklaration
  return a+b;
}

const sumArrow = (a,b)=>{ // Arrow function
  return a+b;
}

const sumVariant2 = (a,b)=>a+b; 

//Задача написати функію яка приймає число і зводить його у квадрат

const pow = number=> number **2;
//якщо 1 аргумент то круглі дужки можна опустити
// але якщо функція не приймає аргументів взагалі то дужки обов'язкові

const SuperFunc = ()=>{ // this - вказує на глобальну область видимості
  this.value = 'hello'; // нам потрібно щоб функція конструктор вказувала свій власній контекст виконання
} // функція конструктор не може бути стрілочною

// arguments - псевдомасив з арументами який ми передаємо нашій функції


/*ОСобливості стрілочних функцій
1. Не має свого власного контексту виконання
2. Стрілочна функція неможе бути функцією конструктором
3. Не має колекції аргументс

*/

function sum(a,b){
  return a+b;
}

// rest operator - оператор залишкових параметрів, залишок запихує у масив

function sum(a,b, ...arrayOfRestArguments){
  console.log(arrayOfRestArguments)
  return a+b;
}
console.log(sum(1,2,3,5,10,25))

// Задача. написати стрілочну функцію яка сумує будь яку кількість чисел

/*
const arrowSum=(...restArrayOfNumbers) => {
  for( let i = 0;i<restArrayOfNumbers.length;i++){
    sum += restArrayOfNumbers[i];
  }
  return sum;
}
*/

// Задача папишіть варіант функції з вікористанням метода редисе. при
// виклику передайте йому стріочний калбек

// Variant 1
/*
const arrowSum =(...restArray)=>{
  const sum = restArray.reduce((accumulator,curentValue)=>{
    return accumulator + curentValue;
  },0);

  return sum;

}
*/


// Variant 2

const arrowSum =(...restArray)=> restArray.reduce((accumulator,curentValue)=> accumulator + curentValue,0);


//spred operator - дозволяє розпаковувати елементи масиву 


const numbers = [1,2,3,4,5];

function sum(a,b,...restArray){
  console.log(restArray);
  return a+b;
}

console.log(sum(...numbers))

//Вкладені цикли

/*
Вивести на консоль таблицю множення від 1 до 5


*/


for(let i = 1; i<=5; i++){ //1 - число. для якого ми виводимо таблицю 
  for(let j=1; j<=5; j++){ // 1*1 1*2 1*3 1*4 1*5
    console.log(`${i}*${j}=${i*j}`)
  }
}


const numbers1 = [[1,2,3],[4,5,6],[7,8,9,]]

//Задача знайти сумму елементів масиву

let sum =0;
for(let i=0; i<numbers1.lenght; i++){   //Зовнішній цикл який контролює масив який ми переглядаємо
  for(let j=0; j<numbers[i].lenght; i++){  //внутрішній цикл сумує всі еленти переглянутого вкладеного масиву
    sum +=numbers1[i][j]  //отримує доступ до поточного елементу переглянутого вкладеного масиву
  }
}

console.log(sum)
