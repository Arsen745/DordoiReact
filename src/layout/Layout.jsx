import React from 'react'
import Header from '../component/header/Header'
import Footer from '../component/footer/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div>
            <Header />
            <div className="container">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout