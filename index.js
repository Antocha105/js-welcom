// [] - Обчислювальні властивості

const user = {
    name: 'John' ,// Ключ  'name'  значення 'john'
    'favorite color':'red',
    0: 'value'
}

// Ключем в обʼєкті може бути рядок або тип данних Sumbol

console.log(user.name)

// . - Оператор доступу за імʼям властивості(коли мова йде про валідні ідентифікатори)

//user.'favorite color'; --> SyntaxError
//user.0; --> SyntaxError

//  [] - оператор доступу до обчислювальної властивості(коли мова йде про невалідні ідентифікатори)

console.log(user['favorite color'])

console.log(user[0])

const someObj = {
    2:10
}

console.log(someObj[2])

console.log(someObj['2'])
