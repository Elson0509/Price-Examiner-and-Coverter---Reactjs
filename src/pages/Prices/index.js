import React from 'react';
import Page from '../../layout/Page';
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import ListButonPrices from '../../components/buttons/ListButonPrices';

const Prices = (props) => {
    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='price'/>
                <ListButonPrices/>

            </div>
        </Page>
    );
};

export default Prices;