import React from 'react';
import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <header className='p-5 flex justify-end border-b border-white/80'>
                <Link to='/'>Home</Link>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;