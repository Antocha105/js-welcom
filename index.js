/*

Розробка програми для керування книжковим магазином

Предметна область: В книжковому магазині у нас буде багато книг. ми їх продаємо

створити конструктор обʼєктів для представлення книг з наступними властивостями.
Назва, Автор, Рік видання, ціна

Спроектувати методи для отримання і встановлення значень цих властивостей


Задача 2: Зробити для всіх книг метод який буде повертати ціну зі знижкою
*/
/*
function Book(title, author, year,price){
    this.title = title;
    this.author = author;
    this.year = year;
    this.price = price;
}

this.getTitle = function() {
    return this.title;
}

this.getAuthor = function(){
    return this.Author;

}

this.getYear = function(){
    return this.getYear;
}

this.getPrice = function(){
    return this.Price
}



this.setTitle = function(newTitle){
    this.title = newTitle;
}

this.setAuthor = function(newAuthor){
    //Реалізувати якісь перевірки

    this.author = newAuthor;
}

this.setYear = function(newYear){
    //Реалізувати якісь перевірки
    this.year = newYear;
}
this.setPrice = function(newPrice){
    //Реалізувати якісь перевірки
    this.price = newPrice;
}

const book1 = new Book('Чотири вітри','Крістін Генна',2020,450)

//book1.setTitle('New Title')
//book1.setAuthor('New Author')
//book1.setYear('2025')
//book1.setPrice('New Price')

this.calculateDiscountedPrice = function(discountPercentage){

    const discountedPrice = this.price - (this.price * (discountPercentage/100));
    return discountedPrice
}
*/


/*

Зробити функцію конструктор яка приймає в якості аргументів:
- назва країні
- Популяція
- площа
спроЕктувати метод густоти населення
*/
/*
function Country(name,population,area){
    this.name = name;
    this.population = population;
    this.area = area;

    this.getDensity = function(){
        return this.population/this.area

    }
}

let country1 = new Country('Ukraina',44000000,603000)
*/

/*
Зробити функцію конструктор авто яке має:
- назву
- максимальну швидкість
- поточну швідкість
Спроектувати методи:
- Метод прискорення (акселерейт) - приймає в якості аргументапевне прискорення
- метод сповільнення - приймае в якості аргумента певне сповільнення





*/

function Auto(name,maxSpeed){
    this.name = name;
    this.maxSpeeed = maxSpeed;
    this.speed = 0;

    this.accelerate = function(accelValue){
        this.speed = this.speed + accelValue;
        if(this.speed > this.maxSpeed){
            return this.maxSpeed
        }
        return this.speed;
    }

    this.deaccelerate = function(deaccelValue){
        this.speed = this.speed - deaccelValue;
        if(this.speed<0){
            this.speed = 0;
        }
        return this.speed
    }

    this.stop = function(){
        this.stop = 0;
        return this.speed;
    }

}

const auto1 = new Auto('Audi', 300)