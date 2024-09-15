import { SiLogitech } from "react-icons/si";
import { BsCart4 } from "react-icons/bs";
import './Header.css'
import { NavLink } from 'react-router-dom';

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
                    <NavLink to='/about'>
                        <BsCart4 />
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default Header