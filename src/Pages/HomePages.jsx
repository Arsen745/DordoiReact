import Header from '../component/header/Header'
import HomeLft from './homeleft/HomeLft'
import HomeRight from './homeright/HomeRight'
import './HomePages.css'

const HomePages = () => {
  return (
    <div>
      <Header />
      <div className="section container">
        <div className="s-left">

          <HomeLft />
        </div>
        <div className="s-right">

          <HomeRight />
        </div>
      </div>
    </div>
  )
}

export default HomePages