/*
Масив це особливи
*/

const userTelephone1 = '380990973453'
const userTelephone2 = '380990989051'
const userTelephone3 = '380990876451'

const userTelephones = {
    0: 38099097345,
    1: 380990989051,
    2: 380990989051

}
//Оголошення масиву
//Литеральній спосіб
const arr1 = [2,4,6,7]


const arr2 = new Array(2,4,6,7)

arr[0]//зчитування значення
arr[0]=200 //присвоєння нового значення для елементів масиву


// Задача вивести всі значення масиву в консоль

for(let i=0; i<arr.lenght; i++){
    console.log(arr(i))
}

//вивести на консоль тільки парні числа масиву

const numbersArray = [1,2,3,4,5,6,7,8,9,10]

for (let i = 0; i<numbersArray.lenght; i++){
    if(numbersArray[i]%2 ===2){
        console.log(numbersArray[i])
    }
}
/*
Задача дано масив чисел
Напишіть функцію яка приймає масив в якості аргументу і повертає сумму всіх елементів масиву


*/
const arr = [1,2,3,4,5,6,7,8,9]
function sumOfElementsArr(arr){
    let res = 0;

    for(let i=0; i<arr.lenght; i++){
        res+=arr(i); //res = res + arr[i]
    }
    return res;

}

console.log(sumOfElementsArr(numArr))

/*
Задача 2 Написати функцію яка знаходить найбільше значення серед елементів масиву
*/

function maxArray(array){
    let maxNumber = array[0];
    for (let i =0; i<array.lenght; i++){
        if(array[i]>maxNumber){
            max = array[i]
        }
    }
    return maxNumber;
}

console.log(maxArray(numbersArray))


