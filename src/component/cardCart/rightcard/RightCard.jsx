import { useNavigate } from 'react-router-dom';
import './Right.css'
import { textFieldClasses } from '@mui/material'

const RightCard = ({ text, price, country, description, id, onDelete, model, values }) => {
    const navigate = useNavigate()

    const fetchOrder = (ids, value) => {
        localStorage.setItem('ids', ids)
        localStorage.setItem('value', value)
    }
    
    return (
        <div className='data-cart'>
            <div className='data-card'>
                <h3 className='title1'><span>названия: </span> {text}</h3>
                <h3 className='title1'><span>модель: </span> {model}</h3>
                <p><span>характеристики: </span>{description}</p>
                <h4 className='title1'><span>страна произвоство: </span>{country}</h4>
                <h2 className='title2'><span>цена: </span>{price}</h2>
            </div>
            <div className='btn-card'>
                <button className='button1' onClick={() => {
                    fetchOrder(id, values),
                    navigate('/users/order')
                }}>Оформить товар</button>
                <button className='button2' onClick={() => onDelete(id)}>Удалить</button>
            </div>
        </div>
    )
}
export default RightCard