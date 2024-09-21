import React, { useState, useEffect } from 'react';
import './CardOrder.css';
import { useNavigate } from 'react-router-dom';

const CardOrder = ({ image, name, model, price }) => {
    const [count, setCount] = useState(1);
    const [userName, setUserName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [addClass, setAddClass] = useState('');
    const [skidka, setSkidka] = useState('');
    const [price1, setPrice] = useState(price);
    const [errorr, setErrorr] = useState('');
    const [scidca, setScidca] = useState(0);
    const [isDiscountApplied, setIsDiscountApplied] = useState(false);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); 
    const navigate = useNavigate();

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const prevCount = () => {
        if (count > 1) {
            setCount((prev) => prev - 1);
        }
    };

    const handleUserNameChange = (e) => {
        setUserName(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleBuy = () => {
        if (!userName || !phoneNumber) {
        } else {
            setUserName('');
            setPhoneNumber('');
            setIsButtonDisabled(true); 
            navigate('/'); 
        }
    };

    const skidkaFun = (e) => {
        setSkidka(e.target.value);
    };

    useEffect(() => {
        if (userName.trim() && phoneNumber.trim()) {
            setAddClass('');
        } else {
            setAddClass('activate');
        }
    }, [userName, phoneNumber]);

    const prevSkid = () => {
        if (isDiscountApplied) {
            setErrorr('Скидка уже была применена');
            return;
        }

        setSkidka('');
        if (parseInt(skidka) === 2024) {
            setPrice((p) => p - 1000);
            setScidca(1000);
            setErrorr('');
            setIsDiscountApplied(true); 
        } else {
            setErrorr('Промокод не работает');
        }
    };

    return (
        <div className='card-order'>
            <div className="left-content-order">
                <div className="image-order">
                    <img src={image} alt="" />
                </div>
            </div>
            <div className="right-content-order">
                <div className="text-content-chek">
                    <h3>{name}</h3>
                    <h3>{model}</h3>
                </div>
                <div className="text-bottm-content-order">
                    <h4><span>Количество: </span>{count} шт</h4>
                    <h4><span>Доставка: </span>0</h4>
                    <h4><span>Скидка: </span>-{scidca}</h4>
                </div>
                <div className="check-price">
                    <h4><span>Итог: </span>{price1 * count} KGZ</h4>
                    <div className="buttons-add">
                        <button onClick={prevCount}>-</button>
                        <h5>{count}</h5>
                        <button onClick={addCount}>+</button>
                    </div>
                </div>
                <div className="forms-order">
                    <input
                        type="text"
                        placeholder='Напишите имя...'
                        value={userName}
                        onChange={handleUserNameChange}
                    />
                    <input
                        type="text"
                        placeholder='Номер телефона...'
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                    />
                </div>
                <div className="buy-button">
                    <button
                        className={addClass}
                        onClick={handleBuy} 
                        disabled={isButtonDisabled} 
                    >
                        Купить ({count})
                    </button>
                    <button className='cancel' onClick={() => {
                        navigate('/about')
                    }}>
                        Отмена
                    </button>
                </div>
                <div className="price-salary">
                    <div className="inp">
                        <input
                            onChange={skidkaFun}
                            value={skidka}
                            type="text"
                            placeholder='Промокод'
                        />
                    </div>
                    <button onClick={prevSkid} disabled={isDiscountApplied}>
                        Получить акцию
                    </button>
                </div>
                <div className="errr">
                    <h4>{errorr}</h4>
                </div>
            </div>
        </div>
    );
};

export default CardOrder;
