import React, { useEffect, useState } from 'react';
import Header from '../component/header/Header';
import Footer from '../component/footer/Footer';
import CardCart from '../component/cardCart/CardCart';
import { Spin, Flex } from 'antd';
import index from '../api/index';
import './FavoritePages.css';
import CardFavorite from '../component/card-favourite/CardFavorite';

const FavoritePage = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('favoriteData'));

    if (!storedData || storedData.length === 0) {
      setError('Ваше избранное пустое');
      setLoading(false);
      return;
    }

    const fetchFavoriteData = async () => {
      try {
        const results = await Promise.all(
          storedData.map(async (el) => {
            const response = await index.Cart(el.value, el.id);
            return { ...response, id: el.id, value: el.value };
          })
        );
        setData(results);
      } catch (error) {
        setError('Ошибка при загрузке данных избранного');
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteData();
  }, []);

  const handleDelete = (id, value) => {
    const newData = data.filter((item) => !(item.id === id && item.value === value));
    setData(newData);

    if (newData.length === 0) {
      setError('Ваше избранное пустое');
    }

    const updatedLocalStorage = JSON.parse(localStorage.getItem('favoriteData')).filter((el) => !(el.id === id && el.value === value));
    localStorage.setItem('favoriteData', JSON.stringify(updatedLocalStorage));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className='container'>
      <Header />

      <div className="flex1-container-favorite">
        {loading ? (
          <Flex gap="middle" className='spinner'>
            <Spin tip="Загрузка..." size="large" />
          </Flex>
        ) : (
          <>
            {data.length > 0 ? (
              data.map((response, index) => (

                <CardFavorite                 
                  key={index}
                  id={response.id}
                  value={response.value} 
                  text={response.name}
                  image={response.image}
                  price={response.price}
                  description={response.description}
                  country={response.country}
                  onDelete={() => handleDelete(response.id, response.value)}
                  values={response.values}/>
              ))
            ) : (
              <p className='spinner'>{error}</p>
            )}
          </>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default FavoritePage;