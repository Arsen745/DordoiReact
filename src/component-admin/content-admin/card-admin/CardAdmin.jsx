import React from 'react'
import './CardAdmin.css'


const CardAdmin = ({name, price, model, image, country}) => {
    return (
        <div className='container-admin-home'>
            <div className="card-container">
                <div className='card-content'>
                    <div className="card-img">
                        <img src={image} alt="arsen" />
                    </div>

                    <div className='all-data'>
                        <div className='flex'>
                            <p>Название</p>
                            <h3 className='title'>{name}</h3>
                        </div>
                        <div className='flex'>
                            <p>Модель</p>
                            <h3 className='title'>{model}</h3>
                        </div>
                        <div className='flex'>
                            <p>Страна</p>
                            <h3 className='title'>{country}</h3>
                        </div>
                        <div className='flex'>
                            <p>Цена</p>
                            <h3 className='title'>{price}</h3>
                        </div>

                        <div className='button'>
                            <button>удалить</button>
                            <button className='edit'>изменить</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardAdmin