import './CardCart.css'
import LeftCard from './leftcard/LeftCard'
import RightCard from './rightcard/RightCard'


const CardCart = ({image, text, country, description, price, id, onDelete}) => {
  return (
    <div className='card-cart'>
      <LeftCard image={image}/>
      <div className="hr"></div>
      <RightCard text={text} country={country} description={description} price={price} id={id} onDelete={onDelete}/>
    </div>
  )
}
export default CardCart