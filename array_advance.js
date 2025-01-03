const numbers = [10, 100, 500, 1000];

//push()
numbers.push(5000);
console.log(numbers);

//forEach() - we don't get new array
numbers.forEach((num) => console.log(num * 3));

//map() - new array back
const newNumbers = numbers.map((num) => num * 3);
console.log(newNumbers);

//some() -> boolean - atleast one number is in the condition
const newSomeNum = numbers.some((num) => {
  return num > 100000;
});
console.log(newSomeNum);

//find() -> return actual element
const result = numbers.find((num) => {
  return num > 800;
});
console.log(result);

//filter()
const filter = numbers.filter((num) => {
  return num > 400;
});
console.log(filter);
