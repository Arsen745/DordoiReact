import Header from '../component/header/Header'
import HomeLft from './homeleft/HomeLft'
import HomeRight from './homeright/HomeRight'
import './HomePages.css'
import Footer from '../component/footer/Footer'

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
        <Footer />
    </div>
  )
}

export default HomePages