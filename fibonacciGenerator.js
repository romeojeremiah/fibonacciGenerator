/*Directions: Create a function where you can call it by writing fibonacciGenerator(n),
where n is the number of items in the sequence. So, fibonacciGenerator(3) should return
0,1,1 as the output.*/

function fibonacciGenerator (n) {
//initialize the array with the first 2 numbers in the sequence    
var array = [0,1];
    
    
//if we want to return 0 numbers from the sequence, we need to return an empty array
if (n < 0){
    alert('Number must be greater than 0!');
}
if (n === 0) {
    array = [];
}
// if we want to return 1 number from the sequence, we need to return an array with the first number in the sequence
if (n === 1) {
    array = [0];
}
/* The loop is set up so we can return 2 or more numbers from the sequence. If we want to return 2 numbers from the sequence, set i = 2. In this case, 0 numbers will be pushed onto the already initialized array, which has 2 numbers in it [0,1], because the loop will not run.
    i=2 is not less than n=2.
    (n=2): i = 2, n = 2, therefore, 2 is not less than 2. No numbers are returned.
    (n=3): i = 2, n = 3, therefore, the loop will run because i = 2 < n = 3 and 'var next' is calculated, which calculates to the next number in the sequence. 
        var next = array[2-1] + array[2-2]
        next = array[1] + array[0] <--This gets the value in slot 1 and slot 0 of the initialized array.
        next = 1 + 0
        next = 1
        This gets pushed onto the array, and then the array returns the first 3 numbers.
        New array is [0, 1, 1]. 
    (n=4): i=2, n=4, loop runs, therefore, the first iteration pushes a 1 onto the initialized array just as described above. Next, i gets incremented to 3, which is less than 4. So, loop runs again and so 'var next' is now array[3-1] + array[3-2] --> array[2] + array[1] = 1 + 1 = 2. So, the number 2 gets pushed onto the array. When i = 4, loop does not run because i=4 !< n=4. 
        New array is [0, 1, 1, 2].
    (n=5): Loop i=2 runs to give a 1. Loop i=3 runs to give a 2. Loop i=4 runs to give --> array[4-1] + array[4-2] --> array[3] + array[2] = 2 + 1 = 3.
        New array is [0, 1, 1, 2, 3]
        .
        .
        .
        */

for (var i=2; i < n; i++){
    var next = array[i-1] + array[i-2];
    array.push(next);
}
return array;//Return an array of fibonacci numbers.   
}


fibonacciGenerator (3); // returns [0,1,1]
fibonacciGenerator (7); //returns [0,1,1,2,3,5,8]
fibonacciGenerator (-1); //returns an alert that states, 'Number must be greater than 0!'
