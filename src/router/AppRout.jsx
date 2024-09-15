import { Route, Routes} from 'react-router-dom'
import HomePages from '../Pages/HomePages'
import AboutPages from '../Pages/AboutPages'

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