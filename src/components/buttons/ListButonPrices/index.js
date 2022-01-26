import React from 'react';
import { menuOptionsPrices } from '../../../services/menuOptions'
import Icon from '../../Icon';
import classes from './ListButonPrices.module.css'
import { useTranslation } from 'react-i18next'

const ListButonPrices = (props) => {
    const { t } = useTranslation()

    return (
        <div>
            <div className={classes.TitleHeaderDiv}>
                <h1 className={classes.TitleHeader}>{t('label.priceDescription')}</h1>
            </div>
            <h4 className={classes.TitleSubHeader}>{t('label.typeOfProduct')}</h4>
            <ul className={classes.List}>
                {menuOptionsPrices.map(el => (
                    <li className={classes.ListItem} style={{ background: el.background, borderColor: el.borderWidth }} >
                        <span className={classes.IconDiv}>
                            <Icon icon={el.icon} size='2x' color="black" />
                        </span>
                        <span className={classes.Title}>
                            {t(el.title)}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListButonPrices;