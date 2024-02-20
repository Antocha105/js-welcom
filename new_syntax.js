class User {
    constructor (name,lastName,age){
        this.name = name;
        this.lastName = lastName;
        this.age = age
    }

    getFullName(){
        return `${this.name} ${this.lastName}`
    }
}

const user1 = new User('Alex','Dane',20)
const user2 = new User('Dari','Dane',23)

/*
Правила класів
1. constructor() при створенні класу - обов'язковий
2. Ми не можемо самостійно звернутись до конструктора
3. Конструктор має бути тільки один
4. Як і у функціях-конструкторах, назва класу пишеться з великої літери
*/
const MIN_ZP = 7100;
const WORK_DAYS =21;
const MIN_RATE = MIN_ZP/WORK_DAYS;

class Worker {
    constructor(name,lastName,rate=MIN_RATE,days=WORK_DAYS){

        if(name===''||lastName===''){
            throw new Error('Name and lastName must be a valid')
        }


        this.name = name;
        
        this.lastName = lastName;

        if(typeof rate !=='number'||typeof days !=='number'){
            throw new TypeError('Rate and days must be a number')
        }

        this.rate = rate;

        if(rate<0){throw new RangeError ('Rate must be positiv number')

        }

        if(days<0 ||days>31){
            throw new RangeError('Days must be in 0 to 31')
        }

        this.days = days;
    }

    setRate(value){
        if(typeof value !=='number'){
            throw new TypeError('Rate and days must be a number')
        }
        if(rate<0){
            throw new RangeError ('Rate must be positiv number')
        }
        this.rate = value;
    }

    getCompensetion(){
        return this.rate*this.days
    }
}

const worker1 = new Worker('Alex','Dane',100,22)



class Fuel{
    constructor(volume,density){
        this.volume = volume;
        this.density = density;

    }

    getWeight(){
        return this.volume*this.density
    }
}

const benzin = new Fuel(50, 0,9)

class Auto{
    constructor(name,ownWeight,fuel){
        this.name = name;
        this.ownWeight = ownWeight;
        this.fuel = fuel;

    }
    getFullWeight(){
        return this.ownWeight + this.fuel.getWeight();
    }
}

const bmw = new Auto(BMW,2000,benzin)



/*
class MyClass {
    // методи класу
    constructor() {
        ....
    }
    method1() {....}
    method2() {....}
    method3() {....}
}
const user = new MyClass();
*/

class User {
    constructor(name, lastName, age) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.name} ${this.lastName}`;
    }
}

const user1 = new User('Alex', 'Dane', 20);
const user2 = new User('Dari', 'Dane', 23);

/*
Правила класів
1. constructor() при створенні класу - обов'язковий
2. Ми не можемо самостійно звернутись до конструктора
3. Конструктор має бути тільки один
4. Як і у функціях-конструкторах, назва класу пишеться з великої літери
*/

/*
Написати клас Worker.
У працівника є ім'я, прізвище, ставка за робочий день і кількість відпрацьованих днів у цьому місяці
Метод, який повертає зарплатню цього робітника за поточний місяць
*/

class RangeValidator {
    constructor(from,to){
        this.from = from;
        this.to = to;

    }

    set from(value){
        if(typeof value !=='number'){
            throw new TypeError('From must be a number')
        }
        if(value>this._to){
            throw new RangeError('From must be a larger than to')
        }

        this._from = value
    }

    get from(){
        return this._from
    }

    set to(value){
        if(typeof value !=='number'){
            throw new TypeError('From must be a number')
        }

        this._to = value
    }

    get to(){
        return this._to
    }

    getRange(){
        const arr =[];
        for(let i=this.from; i<this.to; i++){
            arr.push(i);
        }
        return arr;
    }
}