import { SiLogitech } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import './Header.css';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const updateCounts = () => {
        const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
        const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
        setCartCount(cartData.length);
        setFavoriteCount(favoriteData.length);
    };

    useEffect(() => {
        updateCounts(); 

        window.addEventListener('storage', updateCounts);

        return () => {
            window.removeEventListener('storage', updateCounts);
        };
    }, []); 

    return (
        <div>
            <div className="content-header">
                <div className="logo">
                    <SiLogitech />
                </div>
                <div className="form">
                    <input type="text" placeholder='Напиши текст...' />
                    <button>Искать</button>
                </div>
                <div className="cart">
                    <NavLink className='cart-country' to='/about'>
                        <BsCart4 />
                        <h4>{cartCount}</h4>
                    </NavLink>
                    <NavLink className='favorite-country' to='/favorite'>
                        <IoMdHeartEmpty />
                        <h4>{favoriteCount}</h4> 
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
