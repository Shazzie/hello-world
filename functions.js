/*
 * Programming Quiz: Laugh it Off 1 (5-1)
 */

// your code goes here
function laugh() {
  return "hahahahahahahahahaha!";
}

console.log(laugh());

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh1 = function(num) {
  var string = "";
  for (var i = 0; i < num; i++) {
    string = string += "ha";
  }
  return string + "!";
};

console.log(laugh1(3));

/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function namedFun() {
  return "boohoo!";
};

//function call
console.log(cry());
