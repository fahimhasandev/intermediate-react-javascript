//short - circuiting with &&
const price = 1000;
// if (price > 500 && price < 2000) {
//   console.log('This is right price');
// }

price > 500 && console.log(9999); // first part true, run 2nd one

// short -curcuiting with ||
// first part true, run first one
// first part false, always run 2nd one
price > 500 && console.log(9999); 