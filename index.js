// array.sort - Метод сортування в масиві
// array.sort([compareFunction]) - переставляє елементи в новому масиві за правилом

const array = [5,3,9,21,5,1,24]
array.sort()   //Сортування за зростанням(Unicode)

function compareFunction(a,b){
    if(b>a){
        //4(a),6(b)
        //Відсортівати за зростанням
        return -1;
    }else{
        //b(10)<a(5);
        //Відсортівати за зростанням
        return 1;

    }
}

// a- поточне переглянуте число
    // в- наступне число яку слідує за поточним
    // Функція компаратор повінна повернуте одне з трьох значень
    // -1 - спочатку а потім б
    // 0- елементи залишаються на місці
    // 1 - спочатку б потім а

    array.sort(compareFunction)

    const newNumbersArray = [3,4,1,0,-5,12,13]

    function compareFunction(a,b){
        return a-b;  //Сортування у порядку зростання
    }

    function compareFunction(a,b){
        return b-a;  //Сортування у порядку спадання
    }