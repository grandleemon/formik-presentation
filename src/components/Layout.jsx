import React from 'react';
import {Link, Outlet, useLocation} from "react-router-dom";

const Layout = () => {

    const location = useLocation()

    return (
        <div>
            <header className='p-5 flex justify-end border-b border-white/80 relative'>
                {location.pathname !== '/' && <span className='absolute left-[50%] translate-x-[-50%] capitalize'>{location.pathname.replaceAll('-', ' ').replace('/', '')}</span>}

                <Link className='hover:text-[#52F2F1] transition-colors' to='/'>Home</Link>
            </header>
            <Outlet />
        </div>
    );
};

export default Layout;