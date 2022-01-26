import React from 'react';
import classes from './Header.module.css'
import MenuLanguage from '../../components/MenuLanguage';
import { Link } from 'react-router-dom'

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.DivInv}></div>
            <div className={classes.DivLogo}>
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