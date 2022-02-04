import React from 'react';
import { menuOptionsPrices } from '../../../services/menuOptions'
import Icon from '../../Icon';
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import './ListButonPrices.scss'

const ListButonPrices = () => {
    const { t } = useTranslation()

    return (
        <div>
            <h4 className='TitleSubHeader'>{t('label.typeOfProduct')}</h4>
            <ul className='List'>
                {menuOptionsPrices.map(el => (
                    <Link to={`/price/${el.screen.toLowerCase()}`} key={el.screen} className='ListItemLink'>
                        <li className='ListItem' style={{ background: el.background, borderColor: el.borderWidth }} >
                            <span className='IconDiv'>
                                <Icon icon={el.icon} size='2x' color="black" />
                            </span>
                            <span className='Title'>
                                {t(el.title)}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ListButonPrices;