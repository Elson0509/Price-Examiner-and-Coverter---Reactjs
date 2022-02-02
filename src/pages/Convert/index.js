import React from 'react';
import Page from '../../layout/Page';
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import ListButonPrices from '../../components/buttons/ListButonPrices';
import ListButonConvert from '../../components/buttons/ListButonConvert';
import Banner from '../../components/Banner';
import { useTranslation } from 'react-i18next'

const Convert = (props) => {
    const { t } = useTranslation()

    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='convert'/>
                <Banner text={t('label.convertDescription')}/>
                <ListButonConvert/>
            </div>
        </Page>
    );
};

export default Convert;