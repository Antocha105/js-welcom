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
*/

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
