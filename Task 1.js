//Модуль 6 задание 1
//Функция проерки массива на чётные числа

let nums = [1, 4, 0, 'test', 8, null , NaN, 15, 18]; // входной массив
let oddNums = 0;   // счётчик нечётных чискл
let evenNums = 0;  // счётчик чётных чискл
let noNums = 0;    // счётчик нулевых знвчений


function arrayEvenTest (){        //Функция проерки массива на чётные числа
    for ( i = 0; i < nums.length; i++ ) {
        if (typeof(nums[i]) == "number" && isNaN(nums[i]) !== true) {
            if (nums[i] == 0) noNums++;
            else if (nums[i]%2 == 0) evenNums++;
            else oddNums++;
        }
    }
}

arrayEvenTest();

console.log('Чётных чисел: ' + evenNums);
console.log('Нечётных чисел: '+ oddNums);
console.log('Нулевых значений: '+ noNums);