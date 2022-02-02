import React from 'react';
import Page from '../../layout/Page';
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import ListButonPrices from '../../components/buttons/ListButonPrices';
import Banner from '../../components/Banner';
import { useTranslation } from 'react-i18next'

const Prices = (props) => {
    const { t } = useTranslation()

    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='price'/>
                <Banner text={t('label.priceDescription')}/>
                <ListButonPrices/>
            </div>
        </Page>
    );
};

export default Prices;