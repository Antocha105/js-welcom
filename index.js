
    //array.filter - використовується для створення нового масиву які задовільняють певну умову

    //array.filter(callback)
    //Колбек буде вікликатися для кожного елементу масиву
    //ця функція буде повертитати true, false 


    const numbersArray = [5,3,-9,21,-5,1,-2,4]

    function filterFunction(item){
        if(item>0){
            return true;
        }else(item<0){
            return false;
        }
    }
    const newNumbersArray = numbersArray.filter(filterFunction);

    //Можемо скоротити код

    function filterFunction(item){
        return item > 0;
    }
