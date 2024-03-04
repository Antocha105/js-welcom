/*
Map - (карта, Мапа, словник) зберігає пари ключ-значення та має розмір

Відмінності:
1. Запамятовує елементи в тому порядку в якому ми їх додаємо
2. Ключем може бути будь який тип даних


Ключ в колекції меп має бути унікальним

*/
const map = new Map()

map.set(1,{})
map.set('1','value')
map.get('1')//'value
map.has(1)//true


const vocalbuary = new Map();

vocalbuary.set('cat','собака')
vocalbuary.set('dog','собака')
vocalbuary.set('eat','їсти')


function translater(str,vocalbuary){
  const arrayWords = str.toLowerCase().split(' ')
  const translatedArray = arrayWords.map((word) => {
    console.log(vocalbuary.get(word))
    
  });

  return translatedArray.join(' ')
}

translater('Cat eat dog',vocalbuary)