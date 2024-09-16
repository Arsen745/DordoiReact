import { useState, useEffect } from 'react';
import Header from '../component/header/Header';
import CardCart from '../component/cardCart/CardCart';
import index from '../api/index';

const AboutPages = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('dataLocal'));

    const fetchCartData = async () => {
      const results = await Promise.all(
        storedData.map(async (el) => {
          const response = await index.Cart(el.value, el.id);
          return { ...response, id: el.id };;
        })
      );

      setData(results);
    };
    fetchCartData();
  }, []);


  const handleDelete = (id) => {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);

    const updatedLocalStorage = JSON.parse(localStorage.getItem('dataLocal')).filter((el) => el.id !== id);
    localStorage.setItem('dataLocal', JSON.stringify(updatedLocalStorage));
  };

  return (
    <div className='container'>
      <Header />
      <div className="flex1-container-cart">

        {data.length > 0 ? (
          data.map((response, index) => (


            <CardCart 
            key={index} 
            id={response.id} 
            text={response.name} 
            image={response.image} 
            price={response.price} 
            description={response.description} 
            country={response.country} 
            onDelete={handleDelete}
            />


          ))
        ) : (
          <p>Данные загружаются или отсутствуют...</p>
        )}
      </div>
    </div>
  );
};

export default AboutPages;
