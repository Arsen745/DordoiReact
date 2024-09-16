import { useContext, useState, useEffect } from 'react';
import Card from './card/Card';
import './HomeRight.css';
import { CONTEXT } from '../../context/AppContext';
import { Flex, Spin } from 'antd';

const HomeRight = () => {
  const { dataContext } = useContext(CONTEXT);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    if (dataContext === null) {
      setLoading(true); 
    } else {
      setLoading(false); 
    }
  }, [dataContext]); 

  return (
    <div className='container card'>
      {loading ? ( 
        <Flex gap="middle" className='spinner'>
          <Spin tip="Загрузка..." size="large" />
        </Flex>
      ) : dataContext === null ? ( 
        <h1 className='errors-message'>Ошибка загрузки данных</h1>
      ) : dataContext.length === 0 ? ( 
        <h1 className='errors-message'>Пока это товар нету</h1>
      ) : ( 
        dataContext.map((el, index) => (
          <Card
            key={index}
            name={el.name}
            model={el.model}
            price={el.price}
            country={el.country}
            image={el.image}
            description={el.description}
            values={el.values}
            id={el.id}
          />
        ))
      )}
    </div>
  );
};

export default HomeRight;
