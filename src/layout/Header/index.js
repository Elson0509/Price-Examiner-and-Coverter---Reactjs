import React from 'react';
import MenuLanguage from '../../components/MenuLanguage';
import { Link } from 'react-router-dom'
import './Header.scss'

const Header = () => {
    return (
        <header>
            <div className='DivInv'></div>
            <div className='DivLogo'>
                <Link to='/'>
                    <img src='/img/logo.png' alt='logo peuc' height={80} />
                </Link>
            </div>
            <div>
                <MenuLanguage />
            </div>
        </header>
    );
};

export default Header;