
import { textFieldClasses } from '@mui/material'


const CardCart = ({text, image, price}) => {

    
  return (
    <div>{text}
        <h1>{price}</h1>
        <img src={image} alt="" />
    </div>
  )
}

export default CardCart