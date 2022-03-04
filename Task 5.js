// Модуль 6 задание 5
// Посчитать x в степени n
// Используйте Arrow Function синтаксис.

let x = 2; // первое число
let n = 3; // второе число

const func = (x1, n1) => {
  let result = 1;
  for(let i = 1; i <= n1; i++) {
     result *= x1;
     } 
  return (result); 
};

console.log( x + " в степени " + n + ` равно ${func(x, n)}`);