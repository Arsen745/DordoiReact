import React, { useState, useEffect } from 'react';
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
          return response;
        })
      );

      setData(results);
    };
    fetchCartData();
  }, []);

  return (
    <div className='container'>
      <Header />
      {data.length > 0 ? (
        data.map((response, index) => (
          <CardCart key={index} text={response.name} image={response.image} price={response.price} />
        ))
      ) : (
        <p>Данные загружаются или отсутствуют...</p>
      )}
    </div>
  );
};

export default AboutPages;
