
import React from 'react'
import './CardFavorite.css'

const CardFavorite = ({image, text, country, description, price, id, onDelete, values}) => {


  const handleAddToCart = (id, value) => {
    let existingCartData = localStorage.getItem('cartData');
    existingCartData = existingCartData ? JSON.parse(existingCartData) : [];

    const itemExists = existingCartData.some(item => item.id === id && item.value === value);
    
    if (!itemExists) {
        const newCartItem = { id, value };
        existingCartData.push(newCartItem);
        localStorage.setItem('cartData', JSON.stringify(existingCartData));
    
        window.dispatchEvent(new Event('storage'));
    }
};
  return (
    <div className='cardFavorite'>
      <div className="left-favortie">
        <div className="img">
          <img src={image} alt="" />
        </div>

      </div>
      <div className="right-favortie">
        <div className="text-content-favorite">
          <h3><span>названия: </span>{text}</h3>
          <h4 className='characteristics'><span>характеристики: </span>{description}</h4>
          <h4><span>город: </span>{country}</h4>
          <h2><span>цена: </span>{price}</h2>
          <h2><span>цена: </span>{values}</h2>
          <div className="buttons">
            <button onClick={() => {
              handleAddToCart(id, values)
              onDelete(id)
            }}>Добавить корзину</button>
            <button onClick={() => {
              onDelete(id)
            }}>Удалить изобранный</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default CardFavorite