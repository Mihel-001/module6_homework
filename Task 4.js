//Модуль 6 задание 4
//Функция вывода диапазона чисел a-b через 1 секунду

let a = 10;  //первое число
let b = 15;  //второе число

let id = setInterval(function() {
	
	if (a <= b) console.log(a);  //true - печатаем число
    else clearInterval(id);      //false - выходим из Interval
  
    a++;
}, 1000);