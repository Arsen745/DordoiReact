import React, { useState, useEffect, useContext } from 'react';
import './Header.css';
import { SiLogitech } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { NavLink, useNavigate } from 'react-router-dom';
import index from '../../api/index';
import { CONTEXT } from '../../context/AppContext';
import { Button, Drawer, Tag, Typography } from 'antd';

const Header = () => {
    const [cartCount, setCartCount] = useState(0);
    const [favoriteCount, setFavoriteCount] = useState(0);
    const [letterSearch, setLetterSearch] = useState('');
    const [error, setError] = useState(false);
    const { setSearchData, setClick, funcSaveCart } = useContext(CONTEXT);
    const [open, setOpen] = useState(false);
    const [saveOrders, setSaveOrders] = useState([])

    const { Title } = Typography;

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const updateCounts = () => {
        const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
        const favoriteData = JSON.parse(localStorage.getItem('favoriteData')) || [];
        setCartCount(cartData.length);
        setFavoriteCount(favoriteData.length);
    };
    const navigate = useNavigate();

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
        { name: "Утюг", category: "iron" },
        { name: "Морозильник", category: "Freezer" },
        { name: "Телевизор", category: "Tv" },
        { name: "Аристон", category: "Ariston" },
        { name: "Вафельница", category: "waffli" },
        { name: "Блендер", category: "Blender" },
        { name: "Миксер", category: "Mikser" },
        { name: "Вытяжка", category: "Vitishka" },
        { name: "Стиральная машина", category: "Washing" },
        { name: "Кондиционер", category: "Condis" },
        { name: "Микроволновка", category: "Microvol" },
        { name: "Духовка", category: "Duhovka" },
        { name: "Газ плита", category: "Plita" },
        { name: "Соковыжималка", category: "Socovij" },
        { name: "Электрический плита", category: "Electriplita" },
        { name: "Электрический чайник", category: "Chainik" },
        { name: "Электрический нагреватель", category: "Nagrevatel" },
        { name: "Встраиваемая техника", category: "Vstoemyi" },
        { name: "Посудомоечная машина", category: "PosydaMashine" }
    ];

    const fetchSearch = async () => {
        const results = [];
        try {
            setSearchData(null);

            for (const el of text) {
                const response = await index.Search(el.category);
                response.forEach(item => {
                    if (item.name.toLowerCase().includes(letterSearch.toLowerCase())) {
                        results.push(item);
                    }
                });
            }
            setSearchData(results);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleSearch = () => {
        if (letterSearch.trim() === '') {
            setError(true);
        } else {
            setError(false);
            fetchSearch();
            setClick(true);
            navigate('/');
            setLetterSearch('');
        }
    };
    const addLocalStr = () => {
        const savedOrder = JSON.parse(localStorage.getItem('my_orders'));
        if (savedOrder) {
            setSaveOrders(savedOrder);
        }
    };
    useEffect(() => {
        addLocalStr();
    }, []);
    useEffect(() => {
        addLocalStr();
    }, [funcSaveCart]);




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
                        value={letterSearch}
                        onChange={(e) => setLetterSearch(e.target.value)}
                        type="text"
                        placeholder='Напиши текст...'
                        className={error ? 'error' : ''}
                    />
                    <button onClick={handleSearch}>Искать</button>
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
                    <Button type="primary" onClick={showDrawer}>
                        Мои заказы
                    </Button>
                    <Drawer title="Ваши заказы" onClose={onClose} open={open}>
                        {saveOrders.map(el => {
                            return (
                                <p>
                                    <Tag style={{width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 20}} color="green">
                                        <p>товар: <Title style={{margin: 0, display: 'inline', marginLeft: '20px'}}  level={3}>{el.name}</Title></p>
                                        <p>модель: <Title style={{margin: 0, display: 'inline', marginLeft: '20px'}} level={5}>{el.name}</Title></p>
                                        <p>количество: <Title style={{margin: 0, display: 'inline', marginLeft: '20px'}} level={5}>{el.country}</Title></p>
                                        <p>общий цена: <Title style={{margin: 0, display: 'inline', marginLeft: '20px'}} level={5}>{el.price}</Title></p>
                                    </Tag></p>
                            )
                        })}


                    </Drawer>
                </div>
            </div>
        </div>
    );
};

export default Header;
