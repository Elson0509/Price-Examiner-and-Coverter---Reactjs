import React from 'react'
import './Banner.scss'

const Banner = (props) => {
    return (
        <div className='TitleHeaderDiv'>
            <h1 className='TitleHeader'>{props.text}</h1>
        </div>
    );
};

export default Banner;