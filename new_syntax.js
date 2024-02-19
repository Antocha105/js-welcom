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
        this.name = name;
        this.lastName = lastName;
        this.rate = rate;
        this.days = days;
    }

    getCompensetion(){
        return this.rate*this.days
    }
}

const worker1 = new Worker('Alex','Dane',100,22)