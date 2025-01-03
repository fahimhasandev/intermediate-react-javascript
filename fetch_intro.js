const ul = document.querySelector('#data');

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
