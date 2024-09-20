import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { SiLogitech } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink } from 'react-router-dom';
import index from '../../api/index';
import { CONTEXT } from '../../context/AppContext';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [letterSearch, setLetterSearch] = useState('');

    const { setSearchData, setClick } = useContext(CONTEXT); // Исправлено имя функции

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

    const text = [
        { name: "Пылесос", category: "VacuumCleaner" },
        { name: "Холодильник", category: "Fridge" },
        { name: "Кухонный комбайн", category: "FoodProcessor" },
        { name: "Утюг", category: "iron" },
        { name: "Морозильник", category: "Freezer" },
        { name: "Телевизор", category: "Tv" },
        { name: "Аристон", category: "Ariston" },
        { name: "Стейк машина", category: "Steik" },
        { name: "Вафельница", category: "waffli" },
        { name: "Блендер", category: "Blender" },
        { name: "Миксер", category: "Mikser" },
        { name: "Вытяжка", category: "Vitishka" },
        { name: "Стиральная машина", category: "Washing" },
        { name: "Кондиционер", category: "Condis" },
        { name: "Микроволновка", category: "Microvol" },
        { name: "Духовка", category: "Duhovka" },
        { name: "Газ плита", category: "Plita" },
        { name: "Тепловентилятор", category: "Teplovintel" },
        { name: "Кофеварка", category: "Coffe" },
        { name: "Фритюрница", category: "frity" },
        { name: "Соковыжималка", category: "Socovij" },
        { name: "Электрическая мясорубка", category: "Miasorubka" },
        { name: "Электрический плита", category: "Electriplita" },
        { name: "Электрический чайник", category: "Chainik" },
        { name: "Электрический нагреватель", category: "Nagrevatel" },
        { name: "Встраиваемая техника", category: "Vstoemyi" },
        { name: "Отпариватель", category: "Otparivatel" },
        { name: "Посудомоечная машина", category: "PosydaMashine" }
    ];

    const fetchSearch = async () => {
        const results = []; 
        try {
            for (const el of text) {
                const response = await index.Search(el.category);
                response.forEach(item => {
                    if (item.name.toLowerCase().includes(letterSearch.toLowerCase())) {
                        results.push(item); 
                        console.log(item);
                        
                    }
                });
            }
            setSearchData(results); 
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    return (
        <div>
            <div className="content-header">
                <div className="logo">
                    <NavLink to='/'>
                        <SiLogitech className="navlink" />
                    </NavLink>
                </div>
                <div className="form">
                    <input 
                        onChange={(e) => setLetterSearch(e.target.value)} 
                        type="text" 
                        placeholder='Напиши текст...' 
                    />
                    <button onClick={() => {
                        fetchSearch();
                        setClick(true);
                    }}>Искать</button>
                </div>
                <div className="cart">
                    <NavLink className='cart-country' to='/about'>
                        <BsCart4 className="icon-header" />
                        <h4>{cartCount}</h4>
                    </NavLink>
                    <NavLink className='favorite-country' to='/favorite'>
                        <IoMdHeartEmpty className="icon-header" />
                        <h4>{favoriteCount}</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    );
};

export default Header;
