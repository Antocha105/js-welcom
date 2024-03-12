const monitor = {
    sizes:{
        height:{
            value:30,
            scale: 'cm02'
        },
        width:{
            value: 50,
            scale: 'cm003'
        }        
    },
    brightnass: 750,
    refresh:{
        value:144,
        scale:'Ggrc'
    },
    color: 'black',
    resolution:'4K'
}

/*
//const height = monitor.sizes.height.value

//const {resolution} = monitor

//console.log(resolution)

const {color: monitorColor} = monitor;

const {sizes:{height: {value: heightValue}, width:{value: widthValue}}} = monitor

console.log(widthValue)
console.log(heightValue)

const {sizes:{height: {scale: heightScale}, width:{scale: widthScale}}} = monitor
console.log(heightScale)
console.log(widthScale)

const{color, brightnass,resolution, ...restOfMonitor} = monitor
*/
const user = {
    name:'John',
    age: 33,
    adress:{
        city: 'Kyev',
        country:'Ukraine'
    },
    contacts:{
        email:'john@email.com',
        phone:'+380990973451'
    }
}

const {name, adress:{city}, contacts:{phone}} = user

console.log(name)
console.log(city)
console.log(phone)



const arr = [1,2,3,4,5,6]

const[firstElement,secondElement]= arr;


//old sintax

function getFullName ({firstName, lastName,...restObj}){
    return `${firstName} ${lastName}`
}


const user2 ={
    firstName:'John',
    lastName:'Doe',
    age:42,
    geolocation:'56365432465',
    brouwser:'crome'
}

getFullName(user2)
