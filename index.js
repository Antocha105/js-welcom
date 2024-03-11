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

const arr1 = [2,3,3,5,6,77,77,5,1,1,12,12,13]
const set = new Set(arr1)


const arr2 = [...arr1.values()]

//Variant2
const arr3 = [...new Set(2,3,3,5,6,77,77,5,1,1,12,12,13).values()] 
