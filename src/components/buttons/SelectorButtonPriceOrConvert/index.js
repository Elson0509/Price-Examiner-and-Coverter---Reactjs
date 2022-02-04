import React from 'react';
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './SelectorButtonPriceOrConvert.scss'

const SelectorButtonPriceOrConvert = (props) => {
    const { t } = useTranslation()

    return (
        <div className='ButtonDiv'>
            <Link to='/price' className={`Button ButtonLeft ${props.active==='price' ? 'ButtonActive' : 'ButtonInactive'}`}>
                {t('label.price')}
            </Link>
            <Link to='/convert' className={`Button ButtonRight ${props.active==='convert' ? 'ButtonActive' : 'ButtonInactive'}`}>
                {t('label.convert')}   
            </Link>
        </div>
    )
}

export default SelectorButtonPriceOrConvert;