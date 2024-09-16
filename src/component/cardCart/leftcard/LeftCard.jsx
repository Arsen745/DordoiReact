import './LeftCard.css'
import { textFieldClasses } from '@mui/material'

const LeftCard = ({image}) => {
  return (
    <div className='card-left'>
        <img src={image} alt="" />
        <div className="left"></div>
    </div>
  )
}

export default LeftCard