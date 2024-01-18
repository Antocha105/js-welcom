/*

Розробка програми для керування книжковим магазином

Предметна область: В книжковому магазині у нас буде багато книг. ми їх продаємо

створити конструктор обʼєктів для представлення книг з наступними властивостями.
Назва, Автор, Рік видання, ціна

Спроектувати методи для отримання і встановлення значень цих властивостей


Задача 2: Зробити для всіх книг метод який буде повертати ціну зі знижкою
*/

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
