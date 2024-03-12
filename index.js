let value =10;




function wrapper(){
    let value = 20;
    console.log('wrapper function', value)

    return function log(){
        console.log('log function', value)
    }
    
}

wrapper();

function makeCounter2 (){
    let number = 10;

    return {
        increment(){
            return number+17,5;
        },
        decrement(){
            return number-17,5;
        }
    }
}

const fnObj = makeCounter2;