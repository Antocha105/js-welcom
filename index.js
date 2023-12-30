/*
let length=3
let width=8

const area=length*width;

console.log('Площа прямокутникаж:'+area)


if(2+2===5){
    console.log('Числа рівні між собою!');
}

if(2+3===5){
    console.log('Числа рівні між собою!');
}

if(2+2===5){
    console.log('Числа рівні між собою!'); ///виконаеться якщо умова true
}else{'Числа рівні між собою!'}; ///виконаеться якщо умова false


let a=3
let b=6
let n=8

if (b%2===0) { n+=5
    
}else{n=15}

console.log(a,b,n)


if-else if-else


let r=6
let strWithR='r='+r;

if(r>12){
    console.log(strWithR + ' більше 12');
}else if(r<5){
    console.log(strWithR + ' менше 5')
}else{console.log(strWithR + ' в діапазоні між 5 і 12')};


const age=10;
const hasLicense=true;

if(age>=18 && hasLicense===true) {
    console.log('Ви можете сідаті за руль');
}else if(age<=18) {
    console.log('Ви не можете сідати за кермо');
}else if(hasLicensed===false) {
    console.log('У вас не має спеціальніх прав на керування тс');
}else{
    console.log('Виникла помилка....');
}


const isWeekend = true
const isHoliday = false

if(isWeekend===true||isHoliday===true){
    console.log('Чудовій день для відпочинку');
}else{
    console.log('Треба працювати');
}


const number=10;

if(number!==5){
    console.log(number + ' число не дорівнює5');
}else{
    console.log(number + ' число дорівнює 5')
}



const min=45;
if(min>=0 && min <15){
    console.log('Перша четверть')
}else if (min >=15 && min <=30){
    console.log('Друга четверть')
}else if(min>=30 && min<=45){
    console.log('Третя четверть')
}else if(min>=45 &&min<60){
    console.log('Четверта четверть')
}else{
    console.log('виникла помілка');
}
*/

/*
const year=2012

if(year%4===0 && year %100 !==0 || year % 400 === 0){
    console.log(year+ 'Є високосним');
}else{
    consol.log(year+ ' Не є високосним');
}
*/


/*
const left = 10;
const right = 20;

const number=15;

if(number >= left && number <= right){
    console.log(number + 'є' + '['+left+';'+right+'];');
}else{
    consol.log('Поза діапазоном')
}
*/


/*
const n=20;
const m=50;
const k=50;

if(m>=n && k>=n){
    console.log('так зможе нагородити');
}else{console.log('Ні, не зможе нагородити')

}
*/

const age=5;
const hasDiscount=true;

let ticketPrice

if(age<0 || typeof age !=='number'){
    console.log('Ви ввели некоректний вік користувача. Спробуйте ще раз.')
}else if(age<=6){
    ticketPrice=0;
}else if(age<=12){
    ticketPrice=10;
}else if(!hasDiscount){
    ticketPrice=20
}else{
    ticketPrice=20/2;
}

if(ticketPrice !==undefined){
    console.log('Вартість квитка складає:' + ticketPrice +'$')
}