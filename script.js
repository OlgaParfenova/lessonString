// task 1

// let str = 'js';
// console.log(str.toUpperCase());

// task 2

// let str = 'JS';
// console.log(str.toLowerCase());

// task 3

// let str = 'я учу javascript!';
//
// let method1 = str.substr(2, 3);
// let method2 = str.substring(2, 6);
// let method3 = str.slice(2, 6);
//
// let m1w2 = str.substr(6, 10);
// let m2w2 = str.substring(6, 16);
// let m3w2 = str.slice(6, -1);

// task 4

// let str = 'abcde';
// console.log(str.indexOf('c'));

// task 5

// let str = 'ovnovur';
// console.log(str.indexOf('a'));

// task 6

// let str = 'afrgwth';
// if (str.indexOf('a') === 0) console.log('Начинается с "a"');

// task 7

// let str = 'vfwvgqa';
// if(str.lastIndexOf('a') === 6) console.log('Заканчивается на "а"');

// task 8

// let str = 'http://wkuierqui';
// if (str.indexOf('http://') === 0) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// task 9

// let str = 'rejng';
// if (str.indexOf('.html') === 5) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// task 10

// let str = 'efwgw4rg';
// console.log(str.startsWith('http://'));

// task 11

// let str = 'avregwr.html';
// console.log(str.endsWith('.html'));

// task 12

// let str = '1-2-3-4-5';
// let arr = str.split('-');
// console.log(arr);

// task 13

// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// task 14

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('-'));

// task 15
// let str = 'london';
// string = str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(string);

// task 16
// let str = 'london';
// string = str.slice(0,2).toUpperCase() + str.slice(2);
// console.log(string);

// task 17
// let str = 'London';
// string = str.slice(0,1).toLowerCase() + str.slice(1);
// console.log(string);

// task 18

// let str = 'word1 word2 word3';
// let arr = str.split(' ');
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i].slice(0,1).toUpperCase() + arr[i].slice(1);
// }
// let res = arr.join(' ');
// console.log(res);

// task 19

// function toUpper(str) {
//     let arr = str.split('_');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
//     return arr.join('');
// }
//
// console.log(toUpper('var_test_text'));

// task 20

// function changeStr(str) {
//     let arr = str.split('_');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1);
//     }
//     let newStr = arr.join('');
//     return newStr.slice(0,1).toLowerCase() + newStr.slice(1);
// }
//
// console.log(changeStr('var_test_text'));

// task 21

// let str = 'This is a nice day';
//
// function reverseStr(str) {
//     return str.split(' ').reverse().join(' ');
// }
//
// console.log(reverseStr(str));

// task 22

// let num = 12345;
// let str = String(num);
// let arr = str.split('');
// let sum = 0;
//
// for (let digit of arr) {
//     sum += +digit;
// }
//
// console.log(sum);

// task 23

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
//
// for (let digit of arr) {
//     sum += +digit;
// }
//
// console.log(sum);

// task 24

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
//
// for (let digit of arr) {
//     sum += Number(digit);
// }
//
// console.log(sum);

// task 25
// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
//
// for (let digit of arr) {
//     sum += Number(digit);
// }
//
// console.log(sum);

// task 26

// let num = 12345;
// let arr = String(num).split('');
// let prod = 1;
//
// for (let digit of arr) {
//     prod *= +digit;
// }
//
// console.log(prod);
