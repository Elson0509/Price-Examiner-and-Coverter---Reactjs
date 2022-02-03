import React from 'react';
import { useTranslation } from 'react-i18next'
import './ConvertTable.scss'

const ConvertTable = (props) => {
    const { t } = useTranslation()

    const toReference = props.reference.formulaFrom !== undefined ? new Function('return ' + props.reference.formulaTo.toString())() : null
    const measuresFunctions = props.reference.formulaFrom !== undefined ?
        props.measures.map(el => {
            return {
                ...el,
                formulaTo: new Function('return ' + el.formulaFrom.toString())()
            }
        })
        :
        null

    console.log(props)

    return (
        <div className='table-div'>
            <table>
                <thead>
                    <tr>
                        <th>{t('label.value')}</th>
                        <th>{t('label.measure')}</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.measures.map((el, ind) => (
                            //only print if the symbol is different from the reference. Avoid repeating the value
                            el.symbol === props.reference.symbol ?
                                null
                                :
                                //check if there is a formula to convert
                                toReference ?
                                    <tr key={el.symbol}>
                                        <td>{new Intl.NumberFormat().format(Number(measuresFunctions[ind].formulaTo(Number(toReference(props.value)))))} {el.symbol}</td>
                                        <td>{el.name.map(el => t(el)).join(' ')}</td>
                                    </tr>
                                    :
                                    <tr key={el.symbol}>
                                        <td>{new Intl.NumberFormat().format(Number((props.value * props.reference.factor / el.factor).toFixed(2)))} {el.symbol}</td>
                                        <td>{el.name.map(el => t(el)).join(' ')}</td>
                                    </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ConvertTable;