import { Route, Routes} from 'react-router-dom'
import HomePages from '../Pages/HomePages'
import AboutPages from '../Pages/AboutPages'
import FavoritePage from '../Pages/FavoritePage'
import OrderPage from '../Pages/OrderPage'

const rout = [
    {
        path: '/',
        component: <HomePages/>,
        key: 'home'
    },
    {
        path: '/about',
        component: <AboutPages/>,
        key: 'about'
    },
    {
        path: '/favorite',
        component: <FavoritePage />,
        key: 'favorite'
    },
    {
        path: '/orderpage',
        component: <OrderPage/>,
        key: 'order'
    }
]
const AppRout = () => {
  return (
    <Routes>
        {rout.map(el => (
            <Route path={el.path} element={el.component} key={el.key}/>
        ))}
    </Routes>
  )
}

export default AppRout