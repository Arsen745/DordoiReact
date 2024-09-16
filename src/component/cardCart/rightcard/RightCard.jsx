import './Right.css'
import { textFieldClasses } from '@mui/material'

const RightCard = ({ text, price, country, description, id, onDelete }) => {
    console.log('onDelete');
    
    return (
        <div className='data-cart'>
            <div className='data-card'>
                <h1 className='title1'> {text}</h1>
                <h1 className='title1'>{price}</h1>
                <p>{description}</p>
                <h1 className='title1'>{country}</h1>
            </div>
            <div className='btn-card'>
                <button className='button1'>iman</button>
                <button className='button2' onClick={() => onDelete(id)}>delete</button>
            </div>
        </div>
    )
}

export default RightCard