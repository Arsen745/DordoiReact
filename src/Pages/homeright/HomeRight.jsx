import { useContext, useEffect, useState } from 'react';
import Card from './card/Card';
import './HomeRight.css';
import { CONTEXT } from '../../context/AppContext';
import { Flex, Spin } from 'antd';

const HomeRight = () => {
    const { dataContext, searchData, clickData, categoryClick } = useContext(CONTEXT);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if (categoryClick) {
            setLoading(true);
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000); 

            return () => clearTimeout(timer); 
        } else {
            setLoading(clickData ? searchData === null : dataContext === null);
        }
    }, [dataContext, searchData, clickData, categoryClick]);

    const displayData = clickData ? searchData : dataContext;

    return (
        <div className='container card'>
            {loading ? (
                <Flex gap="middle" className='spinner'>
                    <Spin tip="Загрузка..." size="large" />
                </Flex>
            ) : (
                clickData ? (
                    searchData === null ? (
                        <Flex gap="middle" className='spinner'>
                            <Spin tip="Загрузка..." size="large" />
                        </Flex>
                    ) : (
                        (Array.isArray(searchData) && searchData.length === 0) ? (
                            <h1 className='errors-message'>Такого товара отсутствует</h1>
                        ) : (
                            searchData.map((el, index) => (
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
                    )
                ) : (
                    (Array.isArray(displayData) && displayData.length === 0) ? (
                        <h1 className='errors-message'>Такого товара отсутствует</h1>
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
                )
            )}
        </div>
    );
};

export default HomeRight;
