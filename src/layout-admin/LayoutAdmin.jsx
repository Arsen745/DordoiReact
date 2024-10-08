import React from 'react'
import HeaderAdmin from '../component-admin/header-admin/HeaderAdmin'
import { Outlet } from 'react-router-dom'

const LayoutAdmin = () => {
  return (
    <div className='container'>
        <HeaderAdmin/>
        <div className="container">
            <Outlet/>
        </div>
    </div>
  )
}

export default LayoutAdmin