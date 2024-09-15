import FootBottom from './footbottom/FootBottom'
import FootContact from './footcontact/FootContact'
import './Footer.css'
import FootPeople from './footpeople/FootPeople'
import FootOur from './ourinternet/FootOur'

const Footer = () => {
  return (
    <div className='foot-import'>
      <div className="foot">
        <FootPeople />
        <FootOur />
        <FootContact />
      </div>
        <FootBottom />
    </div>
  )
}

export default Footer