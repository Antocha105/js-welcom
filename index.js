const set = new Set();

set.add(1);
set.add(4);
set.add('Hello');


console.log(set.has(1)) //true
console.log(set.has(12)) //false

set.delete('Hello')


const valuesIterator = set.values()

const arrayFromSet  = [...set.values()]