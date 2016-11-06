// ДЗ
// 1. создать массив на 30 элементов, заполнить случайными числами,
// причем четные элементы заполнить числами больше нуля
// а нечетные - меньше нуля. (подсказка - % это остаток от деления)
// [, 48,-33, 55, -9 -2, 1]
// 2. Этот массив пройти циклом и вывести каждый пятый элемент

//First variant (2arr)
var arr1 = [],
    arr2 = [],
    arr = [];
function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
for (var i = 0; i<15; ++i){
  var num1 = rand(-100, -1); 
    if(!(num1 % 2 == 0)) {
    arr1.push(num1);
    }
    else {--i};
  }
for (var i = 0; i<15; ++i){
  var num2 = rand(0, 100); 
    if (num2 % 2 ==0){
    arr2.push(num2);
    }
    else {--i};
  }
arr =arr1.concat(arr2);
//console.log (arr);
alert (arr);
var newarr = [];
for (var i = 0; i < arr.length; i+=4) {
  newarr.push(arr[i]);
}
alert (newarr);
//console.log (newarr);


//Second variant (1arr)
var arr = [];
function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};
for (var i = 0; i<30; ++i){
  var num1 = rand(-100, -1); 
  var num2 = rand(0, 100); 
    if(!(num1 % 2==0)){
    arr.push(num1);
    num1++;
    }
    else if(num2 % 2 ==0){
    arr.push(num2);
    num2++;
    }
    else {--i};
  }
alert(arr);
//console.log (arr);
var newarr = [];
for (var i = 0; i < arr.length; i+=4) {
  newarr.push(arr[i]);
}
alert (newarr);
//console.log (newarr);