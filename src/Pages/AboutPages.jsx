import { useState, useEffect } from 'react';
import Header from '../component/header/Header';
import CardCart from '../component/cardCart/CardCart';
import index from '../api/index';
import { Alert, Flex, Spin } from 'antd';
import Footer from '../component/footer/Footer';
import { PersonPin } from '@mui/icons-material';

const AboutPages = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true); 
  const [data, setData] = useState([]);

  const contentStyle = {
    padding: 50,
    borderRadius: 4,
  };

  const content = <div style={contentStyle} />;

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('cartData'));

    if (!storedData || storedData.length === 0) {
      setError('Ваша корзина пустая');
      setLoading(false);
      return;
    }

    const fetchCartData = async () => {
      try {
        const results = await Promise.all(
          storedData.map(async (el) => {
            const response = await index.Cart(el.value, el.id);
            return { ...response, id: el.id, value: el.value };
          })
        );
        setData(results);
      } catch (error) {
        setError('Ошибка при загрузке данных корзины');
      } finally {
        setLoading(false);
      }
    };

    fetchCartData();
  }, []);
  const handleDelete = (id, value) => {
    const newData = data.filter((item) => !(item.id === id && item.value === value));
    setData(newData);

    if (newData.length === 0) {
      setError('Ваша корзина пустая');
    }

    const updatedLocalStorage = JSON.parse(localStorage.getItem('cartData')).filter((el) => !(el.id === id && el.value === value));
    localStorage.setItem('cartData', JSON.stringify(updatedLocalStorage));
    window.dispatchEvent(new Event('storage'));
  };

  return (
    <div className='container'>
      <Header />

      <div className="flex1-container-cart">
        {loading ? (
          <Flex gap="middle" className='spinner'>
            <Spin tip="Loading" size="large">
              {content}
            </Spin>
          </Flex>
        ) : (
          <>
            {data.length > 0 ? (
              data.map((response, index) => (
                <CardCart
                  key={index}
                  model={response.model}
                  id={response.id}
                  values={response.values} 
                  text={response.name}
                  image={response.image}
                  price={response.price}
                  description={response.description}
                  country={response.country}
                  onDelete={() => handleDelete(response.id, response.value)} 
                />
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

export default AboutPages;