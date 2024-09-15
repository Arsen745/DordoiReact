import './Card.css'

const Card = () => {
    return (
        <div className="card-container">
            <div className="card-img">
                <img src="https://arsenkerezbekov.pythonanywhere.com/static/uploads/vcc0220-main2-1080%D1%851080.jpg" alt="" />
            </div>
            <div className='flex'>
                <p>названия</p>
                <h3>Пылесос</h3>
            </div>
            <div className='flex'>
                <p>модель</p>
                <h3>Blesk BL-XCQ 15 F</h3>
            </div>
            <div className='flex'>
                <p>страна</p>
                <h3>Китай</h3>
            </div>
            <div className='flex'>
                <p>Цена</p>
                <h3>8500</h3>
            </div>
            <button>Добавить в корзину</button>
        </div>
    )
}

export default Card