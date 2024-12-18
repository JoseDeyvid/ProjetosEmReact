import './Layout.css'

import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar.jsx'

const Layout = () => {
    return (
        <div className='container'>
            <Navbar />
            <div className="content">
                <Outlet />
            </div>
        </div>
    )
}

export default Layout