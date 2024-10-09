import HomePages from '../Pages/HomePages'
import AboutPages from '../Pages/AboutPages'
import FavoritePage from '../Pages/FavoritePage'
import OrderPage from '../Pages/OrderPage'
import AdminHome from '../Pages/admin/admin-home/AdminHome'
import Layout from '../layout/Layout'
import LayoutAdmin from '../layout-admin/LayoutAdmin'
import AdminLogIn from '../Pages/admin/admin-login/AdminLogIn'
import AdminRegister from '../Pages/admin/admin-register/AdminRegister'
import PasswordType from '../Pages/admin/password-type/PasswordType'
import ProfileAdmin from '../Pages/admin/profile-admin/ProfileAdmin'
const routes = [
    {
        path: '',
        element: <Layout />,
        children: [
            {

                path: '/',
                element: <HomePages />,  
            },
            {
                path: '/user/favorite',
                element: <FavoritePage />,  
            },
            {
                path: '/users/cart',
                element: <AboutPages/>
            },
            {
                path: '/users/order',
                element: <OrderPage/>

            }

        ]
    },
    {
        path: '/admin-login',
        element: <AdminLogIn/>

    },
    {
        path: '/admin-register',
        element: <AdminRegister/>
    },
    {
        path: '/admin-password-type',
        element: <PasswordType/>
    },
    {
        path: '/admin/createshop',
        element: <ProfileAdmin/>
    },
    {
        path: '/admin',
        element: <LayoutAdmin/>,
        children: [
            {
                path: '/admin',
                element: <AdminHome/>
            }

        ]
    }
]
export default routes;