import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const Layout = () => {
    return (
        <>
            <nav>
                <Link to={"/"}>Blog</Link>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/new">Novo Post</Link>
                    </li>
                    <li>
                        <Link to="/admin">Gerenciar</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
}

export default Layout