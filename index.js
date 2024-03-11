/*const set = new Set();

set.add(1);
set.add(4);
set.add('Hello');


console.log(set.has(1)) //true
console.log(set.has(12)) //false

set.delete('Hello')


const valuesIterator = set.values()

const arrayFromSet  = [...set.values()]

*/

const arr11 = [2,3,3,5,6,77,77,5,1,1,12,12,13]
const set = new Set(arr11)


const arr22 = [...arr11.values()]

//Variant2
const arr33 = [...new Set(2,3,3,5,6,77,77,5,1,1,12,12,13).values()] 


const arr1 = [4,3,7,5,-11]
const arr2 = [3,4,8,7,2,-11]


function twoArray (arr1,arr2){
    return [...new Set([...arr1, ...arr2])]
}

const arrayWithoutDoubles = twoArray(arr1,arr2)