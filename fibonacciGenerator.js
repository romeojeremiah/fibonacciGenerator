/*Directions: Create a function where you can call it by writing fibonacciGenerator(n),
where n is the number of items in the sequence. So, fibonacciGenerator(3) should return
0,1,1 as the output.*/

function fibonacciGenerator (n) {
//initialize the array with the first 2 numbers in the sequence    
var array = [0,1];
//if we want to return 0 numbers from the sequence, we need to return an empty array
if (n < 0 || n === NaN){
    alert("Please enter a function argument greater than the number 0!");
}
if (n === 0) {
    array = [];
}
// if we want to return 1 number from the sequence, we need to return an array with the first number in the sequence
if (n === 1) {
    array = [0];
}
// if we want to return 2 numbers from the sequence,  set i = 2. 0 numbers will be pushed to the array when n = 2, otherwise a new number
//in the sequence will be pushed to the array for every number greater than 2. 
for (var i=2; i < n; i++){
    var next = array[i-1] + array[i-2];
    array.push(next);
}
return array;//Return an array of fibonacci numbers.   
}

fibonacciGenerator (3);
fibonacciGenerator (7);
fibonacciGenerator (-1);