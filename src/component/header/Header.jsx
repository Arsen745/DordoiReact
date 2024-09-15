import React from 'react'
import { SiLogitech } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import './Header.css'

const Header = () => {
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
                    <BsCart4 />
                </div>
            </div>
        </div>
    )
}

export default Header