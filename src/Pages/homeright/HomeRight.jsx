import { useContext, useState, useEffect } from 'react';
import Card from './card/Card';
import './HomeRight.css';
import { CONTEXT } from '../../context/AppContext';
import { Flex, Spin } from 'antd';

const HomeRight = () => {
    const { dataContext, searchData, clickData } = useContext(CONTEXT);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Устанавливаем состояние загрузки в зависимости от наличия данных
        if (dataContext === null && searchData === null) {
            setLoading(true);
        } else {
            setLoading(false);
        }
    }, [dataContext, searchData]);

    // Определяем, какие данные показывать
    const displayData = searchData !== null ? searchData : (dataContext !== null ? dataContext : []);

    return (
        <div className='container card'>
            {loading ? (
                <Flex gap="middle" className='spinner'>
                    <Spin tip="Загрузка..." size="large" />
                </Flex>
            ) : (
                displayData.length === 0 ? (
                    <h1 className='errors-message'>
                        {searchData !== null ? 'Пока это товар нету' : 'Ошибка загрузки данных'}
                    </h1>
                ) : (
                    displayData.map((el, index) => (
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
                )
            )}
        </div>
    );
};

export default HomeRight;
