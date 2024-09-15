import './Card.css'

const Card = ({name, model, price, country, image}) => {
    return (
        <div className="card-container">
            <div className='saa'>
                <div className="card-img">
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
                        <button className='added-btn'>Добавить в корзину</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card