import React from 'react';
import classes from './Header.module.css'
import MenuLanguage from '../../components/MenuLanguage';

const Header = (props) => {
    return (
        <header className={classes.Header}>
            <div className={classes.DivInv}></div>
            <div className={classes.DivLogo}>
                <img src='/img/logo.png' alt='logo peuc' height={80} />
            </div>
            <div>
                <MenuLanguage />
            </div>
        </header>
    );
};

export default Header;