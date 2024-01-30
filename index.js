
    //array.filter - використовується для створення нового масиву які задовільняють певну умову

    //array.filter(callback)
    //Колбек буде вікликатися для кожного елементу масиву
    //ця функція буде повертитати true, false 

//створити масив з парними числами
/*
    const numbersArray = [5,3,-9,21,-5,1,-2,4]

    const newNumbersArray = numbersArray.filter(filterFunction);

    //Можемо скоротити код

    function filterFunction(item){
        return item % 2 ===0;
    }

    //const array2 = NumbersArray.filter(filterFunction)

    //array.reduce - використовується для обчислення якогось одного значення на основівсіх елементів масиву

    //array.reduce(callback,initialValue)
    //                      initialValue - як акумулятор де накоплюється значення


   // const array = [5,3,-9,21,-5,1,-2,4]

    function reducer(accumulator,item){
        // те що повертає reducer - оновлений акумулятор
        return accumulator+item;

    }

    
    const sum = array.reduce(reducer,0) //0 - значення індексу з якого починаємо рахувати

*/
    const dogArray = [{
        nickname:'Tuzik',
        color:'black',
        weight:'3',
        age:2
    },{
        nickname:'Dolly',
        color:'white',
        weight:'5',
        age:3

    },{
        nickname:'Tuzik',
        color:'black',
        weight:'3',
        age:2
    },{
        nickname:'Fagot',
        color:'black',
        weight:'9',
        age:5
    },{
        nickname:'Stus',
        color:'black',
        weight:'15',
        age:1
    }]

    dogArray.sort((dog1,dog2)=>{
        if(dog1.weight<dog2.weight){
            return -1;
        }else{return 1}
    })

    //або

    dogArray.sort((dog1,dog2)=>{
        return dog1.weight-dog2.weight; //У порядку зростання
    })

    dogArray.sort((dog1,dog2)=>{
        return dog2.age-dog1.age; //У порядку спадання
    })


    dogArray.sort((dog1,dog2)=>{
        return dog2.weight-dog1.weight; //У порядку спадання
    })


    const filterDog = dogArray.filter((dog)=>{
        return dog.color === 'white'
    })

