const btn = document.querySelector('.btn');

const clickHandler = async () => {
  try {
    const res = await fetch('https://reqres.in/api/users');
    const data = await res.json();

    if (!res.ok) {
      console.log(data.description);
      return;
    }

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

btn.addEventListener('click', clickHandler);

console.log(btn);
