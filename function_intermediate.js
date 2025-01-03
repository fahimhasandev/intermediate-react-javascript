/**
 *  1. arrow function
 *  2. calling other funtion in function body
 *  3. refactoring
 *  4. early return/ stop function execution
 */

// 1. vanila function
function addNumers() {
  const newNumbers = 100;
  console.log(newNumbers);
}

//arraow fn
const newNumbers = () => {
  const num = 4;
  console.log(num);
};

//calling function
addNumers();
newNumbers();

//2. calling other functions in function body
const logHello = () => {
  console.log('Hello');
};

function number() {
  console.log(100);
  logHello();
  console.log(9999999);
}
number();

//3. refactoring - we are not duplicaing
const logGreetings = () => {
  console.log('Hello');
  console.log('Hi');
};

const doSomething = () => {
  console.log(43345);
  console.log(43345);
  logGreetings();
};
const logStuff = () => {
  console.log(true);
  console.log(false);
  console.log([1, 2, 3]);
  logGreetings();
};

//4. early return/ stop function execution
const checkValidity = (number) => {
  if (number < 50) {
    console.log('Denied');
    return; // return to stop the function
  }

  console.log('Approved');
};
checkValidity(80);
