/*
Обєкти

const назва обєкту{
    ключ: значення
}

Обєкти мають властивості і методі



const obj = {
    color: 'white',
    fontSize: 2
}

//ООП - Парадигма програмування, яка дозволяє створити програми з  використанням обʼєктів, які маютьвластивості і методи.

const bulb = {
    lightness: 200,
    power: '200W',
    cap: 'small',
    on: function(){
        return 'The light ON!'
    },
    off: function(){
        return 'The light OFF!'
    }

}

console.log(bulb.lightness)



const dog ={
    name: 'Tuzik',
    'favorit Food': 'meat'
}
console.log(dog.name)
console.log(dog["favorit Food"])

*/

// Способі створення обьекта
/*
const cat = { //Літеральне створення обʼєкта

}
const cat2 = Object(); // Функція конструктор

const cat3 = new Object(); // Функція конструктор з оператором new

Конструктор візначає шаблон або склет обʼєктів які будуть створюватися

Угоди у фукціях конструкторах:
1.Імʼя функції має починатися з великої букви
2.Повінна вікористовуватися лише за допомогою оператора NEW
*/

//Написати функцію конструктор для створення кота
function Cat(name,color,breed,age){
    this.name = name; //Посилання на ось цьго новоствореного кота
    this.color = color;
    this.breed = breed;
    this.age = age;
    this.run = function(){
        return this.name + ' is runing';
    }

}

//створити декілька котів, за допомогою нашої функції

const cat1 = new Cat ('Bublik', 'red', 'Dvorovyi', '3');
const cat2 = new Cat ('Murzik', 'black', 'Siam', '4');

/*
створіть функцію-конструктор собаки в якої буде імʼя колір вік

Зробіть декілька собак
*/
function Dog(name,color,age){
    this.name = name;
    this.color = color;
    this.age = age;
    this.gav = function(){
        return 'gav-gav-gav'
    }
}

const dog1 = new Dog('Tuzik','black',1)
const dog2 = new Dog('Knopa','white',3)
const dog3 = new Dog('Liem','black',2)




