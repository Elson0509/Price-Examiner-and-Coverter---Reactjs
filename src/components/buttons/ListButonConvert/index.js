import React from 'react';
import { menuOptionsMeasure } from '../../../services/menuOptions'
import Icon from '../../Icon';
import classes from './ListButonConvert.module.css'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const ListButonConvert = (props) => {
    const { t } = useTranslation()

    return (
        <div>
            <h4 className={classes.TitleSubHeader}>{t('label.typeOfMeasure')}</h4>
            <ul className={classes.List}>
                {menuOptionsMeasure.map(el => (
                    <Link to={`/convert/${el.screen.toLowerCase()}`} key={el.screen} className={classes.ListItemLink}>
                        <li className={classes.ListItem} style={{ background: el.background, borderColor: el.borderWidth }} >
                            <span className={classes.IconDiv}>
                                <Icon icon={el.icon} size='2x' color="black" />
                            </span>
                            <span className={classes.Title}>
                                {t(el.title)}
                            </span>
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export default ListButonConvert;