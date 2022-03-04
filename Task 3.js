//Модуль 6 задание 3

let a = 2;   //первое число
let b = 3;   //второе число
let sum = 0; //сумма чисел

function func1(x){
   return function(y){
     sum = x + y;
     console.log(sum);
  }
}

const resultFunc = func1(a);
resultFunc(b);