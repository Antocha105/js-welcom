
/*
const number = prompt ('Введіть число: ')

if( number % 5 === 0){
    console.log(number + ' ділиться на 5');
}
else if( number % 3 === 0){
    console.log(number + ' ділиться на 3');
}
else if( number % 2 === 0){
    console.log(number + ' ділиться на 2')
}else{
    console.log(number + 'Не ділиться на 5 на 3 на 2')
}

*/

const monthNumber=3;

switch (monthNumber) {
    case 1:
    case 2:
    case 12:{
        console.log('Зима');
        break;
    }
    case 3:
    case 4:
    case 5:
        {
        console.log('Весна');
        break;
    }
    case 6:
    case 7: 
    case 8:
        {
        console.log('Літо');
        break
    }
    case 9:
    case 10:
    case 11:
        {
        console.log('Осінь');
        break
    }
        default:{
        console.log('Введіть число від 1 до 12');
        break;
    }
}
