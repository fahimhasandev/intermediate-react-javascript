/***
 *  1. callback functions
 *  2. Methods
 *  3. default params
 */

//1. callback functions
function doSomething() {}
const calculatePrice = () => {};
calculatePrice();
[4, 5, 6].some(function () {}); //function () {} --> callback funtion

// 2. methods
const arr = [4, 5, 6];
arr.push(); //push() ==> methods

const obj = {
  name: 'John',
  hobbies: ['golf', 'skiing'],
  calculateAge: function () {
    return 30 + this.hobbies.length; //this is obj
    // return 30 + obj.hobbies.length; //
  },
};

console.log(obj.calculateAge()); //methods



// 3. default params
const calculatePrices = (sqMeters = 100000) => {
  return 5000 + sqMeters;
};
const result1 = calculatePrices();
console.log(result1);
