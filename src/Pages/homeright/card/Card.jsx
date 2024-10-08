import './Card.css';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect, useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { CONTEXT } from '../../../context/AppContext';

const notifyAddedToCart = () => toast("Добавлено в корзину!");
const notifyRemovedFromCart = () => toast("Удалено из корзины!");
const notifyAddedToFavorites = () => toast("Добавлено в избранное!");
const notifyRemovedFromFavorites = () => toast("Удалено из избранного!");

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const handleAddToCart = (id, value, setIsInCart) => {
    let existingCartData = localStorage.getItem('cartData');
    existingCartData = existingCartData ? JSON.parse(existingCartData) : [];

    const itemExists = existingCartData.some(item => item.id === id && item.value === value);
    
    if (!itemExists) {
        const newCartItem = { id, value };
        existingCartData.push(newCartItem);
        localStorage.setItem('cartData', JSON.stringify(existingCartData));
    
        setIsInCart(true);
        window.dispatchEvent(new Event('storage'));
    }
};


const handleRemoveFromCart = (id, value, setIsInCart) => {
    let existingCartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const updatedCartData = existingCartData.filter(item => !(item.id === id && item.value === value));
    localStorage.setItem('cartData', JSON.stringify(updatedCartData));
    setIsInCart(false);
    window.dispatchEvent(new Event('storage'));
};
const toggleFavorite = (id, value, isFavorite, setIsFavorite) => {
    let existingFavoriteData = localStorage.getItem('favoriteData');
    existingFavoriteData = existingFavoriteData ? JSON.parse(existingFavoriteData) : [];
    if (isFavorite) {
        const updatedFavoriteData = existingFavoriteData.filter(item => !(item.id === id && item.value === value));
        localStorage.setItem('favoriteData', JSON.stringify(updatedFavoriteData));
    } else {
        const newFavoriteItem = { id, value };
        existingFavoriteData.push(newFavoriteItem);
        localStorage.setItem('favoriteData', JSON.stringify(existingFavoriteData));
    }

    setIsFavorite(!isFavorite);
    window.dispatchEvent(new Event('storage'));
};
const Card = ({ name, model, price, country, image, values, id }) => {
    const [isFavorite, setIsFavorite] = useState(false);
    const [isInCart, setIsInCart] = useState(false);
    useEffect(() => {
        const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
        const itemIsFavorite = favoriteData.some(item => item.id === id && item.value === values);
        setIsFavorite(itemIsFavorite);
    }, [id, values]);
    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
        const itemIsInCart = cartData.some(item => item.id === id && item.value === values);
        setIsInCart(itemIsInCart);
    }, [id, values]);


    return (
        <div className="card-container">
            <div className='card-content'>
                <ToastContainer /> 
                <div className="card-img">
                    <div className="like">
                        <Checkbox
                            {...label}
                            icon={<FavoriteBorder />}
                            checked={isFavorite}
                            onClick={() => toggleFavorite(id, values, isFavorite, setIsFavorite)}
                            checkedIcon={<Favorite />}
                        />
                    </div>
                    <img src={image} alt={name} />
                </div>

                <div className='all-data'>
                    <div className='flex'>
                        <p>Название</p>
                        <h3 className='title'>{name}</h3>
                    </div>
                    <div className='flex'>
                        <p>Модель</p>
                        <h3 className='title'>{model}</h3>
                    </div>
                    <div className='flex'>
                        <p>Страна</p>
                        <h3 className='title'>{country}</h3>
                    </div>
                    <div className='flex'>
                        <p>Цена</p>
                        <h3 className='title'>{price}</h3>
                    </div>
                    <div className='flex'>
                        <p>Магазин</p>
                        <h3 className='title' style={{color: 'blue'}}>Dordoi Techno</h3>
                    </div>

                    <div className='button'>
                        {isInCart ? (
                            <button 
                                className='added-btn remove' 
                                onClick={() => handleRemoveFromCart(id, values, setIsInCart)}
                                style={{ backgroundColor: 'red' }}
                            >
                                Удалить из корзины
                            </button>
                        ) : (
                            <button 
                                className='added-btn' 
                                onClick={() => handleAddToCart(id, values, setIsInCart)}
                            >
                                Добавить в корзину
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;