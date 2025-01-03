const newUser = {
  name: 'maria',
  job: 'Teacher',
};

// POST - Create
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      res.status(400).send('Server is not working');
    }

    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// GET - read

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((res) => {
    if (!res.ok) {
      console.log('problem');
      return; //fn stop //guard clause
    }

    return res.json();
  })
  .then((data) => {
    console.log(data);
    data.forEach((data) => {
      const markup = `<li> ${data.title} </li>`;
      ul.insertAdjacentHTML('beforeend', markup);
    });
  })
  .catch((error) => console.log(error));

//PUT - update
fetch('https://reqres.in/api/users/55', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(newUser),
})
  .then((res) => {
    if (!res.ok) {
      res.status(400).send('Server is not working');
      return;
    }

    return res.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//Delete
fetch('https://reqres.in/api/users/55', {
  method: 'DELETE',
})
  .then((res) => {
    if (!res.ok) {
      console.log('Pm');
      return;
    }

    return res.json();
  })
  .then((data) => console.log('Success'))
  .catch((error) => console.log(error));
