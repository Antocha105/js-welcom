/*
function MyArray() {
  this.length = 0;

  this.push = function (value) {
  this.push = function () {
    for(let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.length;
  }
  this.pop = function() {
    if(this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  }

  this.forEach = function(callback) {
    // ?
    for(let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
    }
  }
}

const arr = new MyArray();
arr.push(1);
arr.push(2);
arr.push(3, 2, 5);

// Відконсольлогувати квадрати кожного числа в масиві arr

// Перепишіть push таким чином, щоб push міг приймати та додавав до масиву будь-яку кількість переданих елементів
arr.push(3, 2, 5, 10, 12, 33);
arr.forEach((item) => {
  console.log(item ** 2);
})

*/

class MyArray{
  constructor(lenght){
    this.lenght= 0;
  }

  push(){
    for(let i = 0; i < arguments.length; i++) {
      this[this.length] = arguments[i];
      this.length++;
    }
    return this.lenght

  }

  pop(){
    if(this.length > 0) {
      // 1. Зберегти останній елемент
      const lastItem = this[this.length - 1];
      // 2. Видалити останній елемент з масиву
      delete this[this.length - 1];
      // 3. Зменшити довжину масиву на 1
      this.length--;
      // 4. Повернути останній елемент
      return lastItem;
    } else {
      return undefined;
    }
  }
  
  forEach(callback){
    for(let i = 0; i < this.length; i++) {
      callback(this[i], i, this);
  }

}
}

const arr =  new MyArray()