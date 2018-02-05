function isThisWorking(input) {
  console.log(
    "Printing: isThisWorking was called and " +
      input +
      " was passed in as an argument."
  );
  return "Returning: I am returning this string!";
}

isThisWorking(3);

function sleep() {
  console.log("I'm sleepy!");
  return "zzz";
  return "snore";
}

sleep();

function square(x) {
  return x * x;
}

function subtractFour(x) {
  return square(x) - 4;
}

console.log(subtractFour(5));

function test() {
  return 1;
  return 2;
}

test();
