import React, { useState } from 'react';
import Page from '../../layout/Page';
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import Modal from '../../components/Modal';
import classes from './PricesCompare.module.css'
import InputValue from '../../components/inputs/InputValue';
import InputOptions from '../../components/inputs/InputOptions';
import ButtonActions from '../../components/buttons/ButtonActions';
import { useTranslation } from 'react-i18next'
import { validateNumberStringWithDecimals } from '../../services/serviceFunctions'

const PricesCompare = (props) => {
    const { t } = useTranslation()
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [price, setPrice] = useState('')
    const [qtt, setQtt] = useState('')

    console.log(props)

    const confirmClickHandler = _ => {
        console.log('confirmClickHandler')
    }

    const cancelClickHandler = _ => {
        console.log('cancelClickHandler')
    }

    const removeClickHandler = _ => {
        console.log('removeClickHandler')
    }

    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='price' />
                <h1 className={classes.Title}>{t(props.title)}</h1>
            </div>
            <button onClick={() => setModal(true)}>Abrir</button>
            <Modal modal={modal} setModal={setModal}>
                <InputValue label={t('label.price')} value={price} changeValue={ev => setPrice(ev.target.value)} />
                <InputValue label={t('label.quantity')} value={qtt} changeValue={ev => setQtt(ev.target.value)} />
                <InputOptions label={t('label.typeOfMeasure')} options={props.measures} />
                <ButtonActions
                    text1={t('label.confirm')}
                    text2={t('label.cancel')}
                    text3={t('label.remove')}
                    action1={confirmClickHandler}
                    action2={cancelClickHandler}
                    action3={removeClickHandler}
                />
            </Modal>
        </Page>
    );
};

export default PricesCompare;