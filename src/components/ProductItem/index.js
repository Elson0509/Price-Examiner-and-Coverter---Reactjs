import React from 'react'
import Icon from '../Icon'
import { useTranslation } from 'react-i18next'
import {
    BORDER_COLOR_ITEM_LIST, 
    BORDER_COLOR_ITEM_LIST_EXPENSIVE, 
    BORDER_COLOR_ITEM_LIST_CHEAP,
    BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE,
    BACKGROUND_COLOR_ITEM_LIST_CHEAP
} from '../../services/Constants'
import './ProductItem.scss'

const ProductItem = (props) => {
    const { t } = useTranslation()

    let borderColor
    let backgroundColor
    if (props.product.isCheaper === undefined) {
        borderColor = BORDER_COLOR_ITEM_LIST
    }
    else {
        borderColor = props.product.isCheaper ? BORDER_COLOR_ITEM_LIST_CHEAP : BORDER_COLOR_ITEM_LIST_EXPENSIVE
        backgroundColor = props.product.isCheaper ? BACKGROUND_COLOR_ITEM_LIST_CHEAP : BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE
    }

    return (
        props.product?.price ?
        <button className='Box' style={{borderColor, backgroundColor}} onClick={()=>props.productClickHandler(props.product)}>
            <h4 className='Title'>{t('label.item')} {props.product.order}</h4>
            <div className='Description'>{t('label.price')}: $ {Number(props.product.price).toFixed(2)}</div>
            <div className='Description'>{t('label.quantity')}: {Number(props.product.qtt).toFixed(2)} {props.type?.symbol ?? ''}</div>
            {
                props.product.isCheaper !== undefined && props.product.isCheaper &&
                <div>
                    <Icon icon='thumbs-up' color={BORDER_COLOR_ITEM_LIST_CHEAP} size='3x'/>
                </div>
            }
            {
                props.product.isCheaper !== undefined && !props.product.isCheaper &&
                <div className='ExpensiveDataDiv'>
                    <Icon icon='long-arrow-alt-up' color={BORDER_COLOR_ITEM_LIST_EXPENSIVE} size='3x'/>
                    <span style={{color:BORDER_COLOR_ITEM_LIST_EXPENSIVE, fontSize: '1rem', fontWeight: 'bold', letterSpacing: '1px'}}>{props.product.howMuchExpensive.toFixed(1)} %</span>
                </div>
            }
        </button>
        :
        <button className='Box' onClick={() =>props.clicked()}>
            <Icon icon='plus-square' size='6x'/>
        </button>
    );
};

export default ProductItem;