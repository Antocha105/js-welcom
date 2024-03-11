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


//const height = monitor.sizes.height.value

//const {resolution} = monitor

console.log(resolution)

const {color: monitorColor} = monitor;

const {sizes:{height: {value: heightValue}, width:{value: widthValue}}} = monitor

console.log(widthValue)
console.log(heightValue)

const {sizes:{height: {scale: heightScale}, width:{scale: widthScale}}} = monitor
console.log(heightScale)
console.log(widthScale)

const{color, brightnass,resolution, ...restOfMonitor} = monitor