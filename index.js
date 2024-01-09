// loop - цикли. 

/*
while - цикл з передумово
do-while - цикл з післяумовою.

do{
    тут буде блок коду який циклічно виконується
} while(умова)

                       


*/

const correktPassword = 'qwerty1234';

let userPass;
do{
    userPass = prompt('Введіть свій пароль');
}while(userPass !==correctPassword)
//Дотих пір доки пароль з промпту не дорівнює корект пассворд буде виконуватися юсер пасс