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
*/

const cat={
    name: 'Murzik',
    color: 'red',
    breed: 'Dvorovyi',
    age: 2,
    eat: function(){
        return 'I am eating'
    },
    sleep: function(){
        return 'I am sleeping'
    }
}
console.log(cat.age) //2

cat.age = cat.age + 1;

console.log(cat.age) //3

cat.sleep = undefined; //Bad practice

delete cat.sleep; //GOOD PRACTICE


//Додавання властивостей 

//Задача: додати в обʼєкт Мурзика імʼя його друга

cat.friend = 'Tuzik'

cat['favorit food'] = 'fish';
cat.maow = function {
    return 'maow'

}