//Object desctructuing

const user = {
  name: 'John',
  age: 45,
  hobbies: ['golf', 'tennis'],
  city: 'NYC',
};

const { age, name } = user;
console.log(age + 1000);

//Array desctructuing
const numbers = [5, 6, 7, 8, 820, 24];
const [a, b, c] = numbers;
console.log(a, b, c);
