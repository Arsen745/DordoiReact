import { Route, Routes} from 'react-router-dom'
import HomePages from '../Pages/HomePages'
import AboutPages from '../Pages/AboutPages'
import FavoritePage from '../Pages/FavoritePage'

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
        component: <FavoritePage/>,
        key: 'favorite'
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