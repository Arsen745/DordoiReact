import './Card.css'

const Card = ({name, model, price, country, image}) => {
    return (
        <div className="card-container">
            <div className="card-img">
                <img src={image} alt="" />
            </div>
            <div className='flex'>
                <p>названия</p>
                <h3>{name}</h3>
            </div>
            <div className='flex'>
                <p>модель</p>
                <h3>{model}</h3>
            </div>
            <div className='flex'>
                <p>страна</p>
                <h3>{country}</h3>
            </div>
            <div className='flex'>
                <p>Цена</p>
                <h3>{price}</h3>
            </div>
            <button>Добавить в корзину</button>
        </div>
    )
}

export default Card