import React, { useState } from 'react';
import Page from '../../layout/Page';
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import classes from './Conversor.module.css'
import InputValue from '../../components/inputs/InputValue';
import InputOptions from '../../components/inputs/InputOptions';
import { useTranslation } from 'react-i18next'
import ConvertTable from '../../components/Tables/ConvertTable';

const Conversor = (props) => {
    const { t } = useTranslation()

    const [from, setFrom] = useState(0)
    const [value, setValue] = useState('')

    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='convert'/>
                <h1 className={classes.Title}>{t(props.title)}</h1>
            </div>
            <div className={classes.Container}>
                <InputOptions 
                    label={t('label.from')}
                    value={from}
                    options={props.measures}
                    setValue={ev => setFrom(ev.target.value)}
                />
                <InputValue
                    label={t('label.value')}
                    value={value}
                    changeValue={ev => setValue(ev.target.value)}
                />
            </div>
            {
                from !== undefined && value !== '' && !isNaN(value) &&
                <ConvertTable
                    value={Number(value)}
                    measures={props.measures}
                    reference={props.measures[from]}
                />
            }
        </Page>
    );
};

export default Conversor;