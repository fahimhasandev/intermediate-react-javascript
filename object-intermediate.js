//! object in object

const user = {
  name: 'John',
  age: 20,
  hobbies: ['Knitting', 'programming'],
  address: {
    city: 'Miami',
    state: 'Florida',
  },
};

console.log(user.address);
console.log(user.address.city);

//! property name is sometimes same as property value.
// const userName = input.value;
// const password = input.value;

//! send tot server (newUser)
const newUser = {
//   userName: userName,
//   password: password,
};

// passing object as argument to function
function logUser(users) {
  console.log(users.name);
  console.log(users.age);
}

const users = {
  name: 'Emily',
  age: 30,
};
logUser(users);
