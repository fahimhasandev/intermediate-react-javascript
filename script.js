const numbers = [99, 5, 8, 16];

// length (number of elements in array)

//push()
numbers.push(100);
console.log(numbers);

//includes ()
console.log(numbers.includes(5)); //true
console.log(numbers.includes(9)); //false

//forEach()
// console.log(numbers[2] * 2);
// const num = numbers.forEach(num => num * 2);
// console.log(num);
numbers.forEach((num) => {
  console.log(num * 2);
});

//objects in array
