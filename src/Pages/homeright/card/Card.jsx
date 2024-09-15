import './Card.css'
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';






const notify = () => toast("Добавлено корзина!");
const notify2 = () => toast("Добавлено изобранный!");
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


const Card = ({ name, model, price, country, image, description, values, id }) => {

    const onLocal = (id, value) => {
        let existingData = localStorage.getItem('dataLocal');

        notify()
        existingData = existingData ? JSON.parse(existingData) : [];
        const newData = {
            id,
            value
        };

        existingData.push(newData);
        localStorage.setItem('dataLocal', JSON.stringify(existingData));
    };
    return (
        <div className="card-container">
            <div className='saa'>
                <div className="card-img">
                    <div className="like">
                        <ToastContainer />
                        <Checkbox {...label} icon={<FavoriteBorder />} onClick={() => {
                            notify2()
                        }} checkedIcon={<Favorite />} />
                    </div>
                    <img src={image} alt="" />
                </div>
                <div className='all-data'>
                    <div className='flex'>
                        <p>названия</p>
                        <h3 className='title'>{name}</h3>
                    </div>
                    <div className='flex'>
                        <p>модель</p>
                        <h3 className='title'>{model}</h3>
                    </div>
                    <div className='flex'>
                        <p>страна</p>
                        <h3 className='title'>{country}</h3>
                    </div>
                    <div className='flex'>
                        <p>Цена</p>
                        <h3 className='title'>{price}</h3>

                    </div>
                    <div className='button'>
                        <button className='added-btn' onClick={() => {
                            onLocal(id, values)
                            
                        }}>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card