// returns the sum of two numbers
function add(x, y) {
  return x + y;
}

// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}

var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable

function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));
