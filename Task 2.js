//Модуль 6 задание 2 
//Функция определения простого числа

let number = 943;   //Задайте число от 1 до 1000
console.log(`${testNumber(number)}`)

function testNumber(inputNumber){
    let counter = 0;
    if ((inputNumber < 1)||(inputNumber > 1000)){
       return('Данные не верны')
    }

    for (let i = 1; i <= inputNumber; i++){
        result = inputNumber%i;
        if (result == 0) counter++;  
    }

    if (counter == 2){
        return('Число простое'); 
    } else {
        return('Число не является простым');}
}