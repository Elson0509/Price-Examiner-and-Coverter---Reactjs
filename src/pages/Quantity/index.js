import React, { useState } from 'react'
import Page from '../../layout/Page'
import SelectorButtonPriceOrConvert from '../../components/buttons/SelectorButtonPriceOrConvert'
import Modal from '../../components/Modal'
import InputValue from '../../components/inputs/InputValue'
import ButtonActions from '../../components/buttons/ButtonActions'
import { useTranslation } from 'react-i18next'
import ProductItem from '../../components/ProductItem'
import './Quantity.scss'

const Quantity = (props) => {
    const { t } = useTranslation()
    const [products, setProducts] = useState([])
    const [modal, setModal] = useState(false)
    const [price, setPrice] = useState('')
    const [qtt, setQtt] = useState('')
    const [order, setOrder] = useState(null)
    const [btn1Text, setBtn1Text] = useState('')
    const [btn3Text, setBtn3Text] = useState('')
    const [dangerColorPrice, setDangerColorPrice] = useState('')
    const [dangerColorQtt, setDangerColorQtt] = useState('')

    const confirmClickHandler = _ => {
        // Validating form
        if (!price) {
            return setDangerColorPrice('red')
        }
        else {
            setDangerColorPrice('')
        }
        if (!qtt) {
            return setDangerColorQtt('red')
        }
        else {
            setDangerColorQtt('')
        }
        //adding item...
        if (!order) {
            const newItem = { id: Date.now() + price + qtt, price, qtt }
            setProducts(prev => [...prev, newItem])
        }
        //or updating it in the list
        else {
            const newProducts = [...products]
            newProducts[order - 1] = { id: Date.now() + price + qtt, price, qtt }
            setProducts(newProducts)
        }
        setModal(false)
    }

    const cancelClickHandler = _ => {
        setModal(false)
    }

    const removeClickHandler = _ => {
        const newProducts = [...products]
        newProducts.splice(order-1, 1)
        setProducts(newProducts)
        setModal(false)
    }

    const addHandler = _ => {
        setDangerColorPrice('')
        setDangerColorQtt('')
        setBtn1Text('')
        setPrice('')
        setQtt('')
        setBtn3Text('')
        setOrder(null)
        setModal(true)
    }

    const productsList = _ => {
        let cheapper = 0
        let productList = products.map((el, ind) => { 
            const relativePrice = el.price / el.qtt
            if (cheapper === 0 || relativePrice < cheapper){
                cheapper = relativePrice
            }
            return { ...el, order: ind + 1, relativePrice } }
        )
        //calculate cheapest product if there are at least 2 products
        if(productList.length >=2){
            productList = productList.map(el=>{
                const prod = {...el}
                prod.isCheaper = el.relativePrice === cheapper
                prod.howMuchExpensive = (el.relativePrice - cheapper) / cheapper * 100
                return prod
            })
        }
        productList.push({ id: Date.now() })
        return productList
    }

    const productClickHandler = product => {
        setBtn1Text(t('label.update'))
        setBtn3Text(t('label.remove'))
        setPrice(product.price)
        setQtt(product.qtt)
        setOrder(product.order)
        setModal(true)
    }

    return (
        <Page>
            <div>
                <SelectorButtonPriceOrConvert active='price'/>
                <h1 className='Title'>{t(props.title)}</h1>
            </div>
            <div className='ListProducts'>
            {
                productsList().map(el=>(
                    <ProductItem 
                        key={el.id} 
                        product={el} 
                        type={props.measures[el.type]} 
                        clicked={()=>addHandler()}
                        productClickHandler={productClickHandler}
                    />
                ))
            }
            </div>
            <Modal modal={modal} setModal={setModal}>
                <InputValue 
                    label={t('label.price')} 
                    value={price} 
                    changeValue={ev => setPrice(ev.target.value)} 
                    borderColor={dangerColorPrice}
                />
                <InputValue 
                    label={t('label.quantity')} 
                    value={qtt} 
                    changeValue={ev => setQtt(ev.target.value)} 
                    borderColor={dangerColorQtt}
                />
                <ButtonActions
                    text1={btn1Text || t('label.confirm')}
                    text2={t('label.cancel')}
                    text3={btn3Text}
                    action1={confirmClickHandler}
                    action2={cancelClickHandler}
                    action3={removeClickHandler}
                />
            </Modal>
        </Page>
    );
};

export default Quantity;