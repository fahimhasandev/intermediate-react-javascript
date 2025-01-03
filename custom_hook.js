const useQuantity = () => {
  const [qty, setQty] = useState(0);

  useEffect(() => {
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

    clickHandler();
  }, []);
  
  return qty;
};

import React from 'react';

const App = () => {
  const { qty } = useQuantity();
  return <div>custom_hook</div>;
};

export default custom_hook;
