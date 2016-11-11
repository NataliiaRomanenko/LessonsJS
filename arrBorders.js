// ДЗ:
// Для массива 10 на 10 получить результирующий ПЛОСКИЙ (одномерный) массив, 
// состоящий из элементов, лежащих на гранях двумерного массива.


var arr = [];
var SIZE_ARR = prompt ("put array size","");
function rand (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
for (var i = 0; i < SIZE_ARR; i++) {
  arr[i] =[];
  for (var y = 0; y < SIZE_ARR; y++) {
    arr[i].push(rand(0, 100));
  }
}
console.table(arr); // main array

var newArr1 = arr[0];
console.log (newArr1); //вывод первой строчки
var newArr2 = arr[arr.length - 1];
newArr2.reverse();
console.log(newArr2); //вывод последней строчки

var newArr3=[];
for (var y=arr.length-1; y>0; y--){


  for (var i=1 ;i<arr.length-1; i++) {

    if (y==arr.length-1) {
      newArr3.push(arr[i][y])};

    }
  }  
  console.log(newArr3);//вывод последнего столбца

  var newArr4=[];
  for (var i=arr.length-2 ;i>=1; i--){


    for (var y=arr.length-1;y>=0; y--) {

      if (y==0) {
        newArr4.push(arr[i][y])};

      }
    }  
    console.log(newArr4);//вывод первого столбца

    var fullArr = newArr1.concat (newArr3, newArr2, newArr4);
    console.log (fullArr);
