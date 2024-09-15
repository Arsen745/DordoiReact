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
            <div className='saa'>
                <div className="card-img">
                    <img src="https://arsenkerezbekov.pythonanywhere.com/static/uploads/vcc0220-main2-1080%D1%851080.jpg" alt="" />
                </div>
                <div className='all-data'>
                    <div className='flex'>
                        <p>названия</p>
                        <h3 className='title'>Пылесос</h3>
                    </div>
                    <div className='flex'>
                        <p>модель</p>
                        <h3 className='title'>Blesk BL-XCQ 15</h3>
                    </div>
                    <div className='flex'>
                        <p>страна</p>
                        <h3 className='title'>Китай</h3>
                    </div>
                    <div className='flex'>
                        <p>Цена</p>
                        <h3 className='title'>8500</h3>
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