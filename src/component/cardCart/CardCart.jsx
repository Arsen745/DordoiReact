import './CardCart.css'
import LeftCard from './leftcard/LeftCard'
import RightCard from './rightcard/RightCard'


const CardCart = ({model,image, text, country, description, price, id, onDelete, values}) => {
  return (
    <div className='card-cart'>
      <i className="bi bi-x-lg" onClick={() => {
        onDelete()
      }}></i>
      <LeftCard image={image}/>
      <div className="hr"></div>
      <RightCard text={text} country={country} description={description} price={price} id={id} onDelete={onDelete} model={model} values={values}/>
    </div>
  )
}
export default CardCart