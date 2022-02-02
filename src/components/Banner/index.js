import React from 'react';
import classes from './Banner.module.css'

const Banner = (props) => {
    return (
        <div className={classes.TitleHeaderDiv}>
            <h1 className={classes.TitleHeader}>{props.text}</h1>
        </div>
    );
};

export default Banner;