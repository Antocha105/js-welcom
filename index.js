/*
Обєкти

const назва обєкту{
    ключ: значення
}

Обєкти мають властивості і методі

*/

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