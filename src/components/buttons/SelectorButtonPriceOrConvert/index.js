import React from 'react';
import classes from './SelectorButtonPriceOrConvert.module.css'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const SelectorButtonPriceOrConvert = (props) => {
    const { t } = useTranslation()

    return (
        <div className={classes.ButtonDiv}>
            <Link to='/price' className={[classes.Button, classes.ButtonLeft, props.active==='price' ? classes.ButtonActive : classes.ButtonInactive].join(' ')}>
                {t('label.price')}
            </Link>
            <Link to='/convert' className={[classes.Button, classes.ButtonRight, props.active==='convert' ? classes.ButtonActive : classes.ButtonInactive].join(' ')}>
                {t('label.convert')}   
            </Link>
        </div>
    );
};

export default SelectorButtonPriceOrConvert;