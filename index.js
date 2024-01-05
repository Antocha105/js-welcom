
/*

function calculator(num1,num2, functionLink) {
    let result = functionLink(num1,num2)
    return result;
}

console.log(calculator(5,5, multy));

function sum(a,b) {
    return a+b;
}
*/

/*
Розробити алгоритм який буде відображети режим нашого дня

Потрібна функція яка приймає ту чи іншу пору дня і виконує ті чи інші дії
*/

function todo(timeOfDay){ //HOF
    //morning - Список справ на ранок
    //lunch - Список справ на обід
    // evening - Список справ на вечір

    switch(timeOfDay){
        case 'morning':{
            washingFace();
            brushingTeeth();
            skinCare();
            breakFast();
            break;
    }
    case 'lunch':{
        goToOffice();
        coding();
        lunch();
        coding();
        break;

    }
    case 'evening':{
        education();
        coding();
        goToHome();
        shower();
        brushingTeeth();
        skinCare();
        sleep();
        break;

    }
    default: {
        console.log('Такої пори дня непередбачено')
    }
}
}

todo('evening');

function washingFace(){
    console.log('washing face');
}

function brushingTeeth(){
    console.log('brushing teeth');
}

function skinCare(){
    console.log('skin care');
}

function breakFast(){
    console.log('breakfast');
}

function goToOffice(){
    console.log('go to offise');
}

function coding(){
    console.log('coding');
}

function lunch(){
    console.log('lunch');
}

function education(){
    console.log('education');
}

function goToHome(){
    console.log('Go to home');
}

function shower(){
    console.log('shower');
}

function sleep(){
    console.log('sleep');
}
