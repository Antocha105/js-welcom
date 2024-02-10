/*
Написати функцію якаробить кожну першу літеру у слові  великою
*/
function capitalizeWords(str){
    let word = str.split(' ')

    for(let i=0;i<words.lenght; i++){
        console.log(words[i].charAt(0).toUpperCase()+words[i].slice(1))
    }
    return words.join(' ') 

}

capitalizeWords('word flower third')


/* Задача 1
Написати функцію checkSpam, яка повертає true, якщо переданий рядок містить слова 'xxx' або 'viagra'
Якщо заборонених слів у рядку немає - повертається false


checkSpam('buy ViAgRa now'); // true
checkSpam('free xxxxxxx'); // true
checkSpam('innocent rabbit'); // false

*/


function checkSpam(str){
    const lowStr=str.toLowerCase
    const result = lowstr.includes('viagra') || lowStr.includes('xxx')

}

console.log(checkSpam('buy Viagra now'))
console.log(checkSpam('free xxxxxxx'))
console.log(checkSpam('innocent rabbit'))

//Variant 2

function checkSpam(str){
    const spamArray = ['viagra','xxx','drugs'];

    for(let i=0; i<spamArray.length; i++){
        if(str.toLowerCase().includes(spamArray[i])===true){
            return true;
        }
    }
    return false;
}

/*
Написати функцію, яка перевіряє, чи є переданий їй рядок - паліндромом. не зважаючи на регістр
Паліндром - це коли рядок з обох сторін читається однаково
Anna - паліндром
Mama - не паліндром
Namman - паліндром
*/

function checkPalindrom(str){
    const originalStr = str.toLowerCase();
    const reversedStr = originalStr.split('').reverse().join('');
    return originalStr === reversedStr;
}
