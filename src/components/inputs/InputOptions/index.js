import React from 'react';
import { useTranslation } from 'react-i18next'
import './InputOptions.scss'

const InputOptions = (props) => {
    const { t } = useTranslation()
    return (
        <div className='InputDiv'>
            <div>
                <label className='Label'>{props.label}</label>
            </div>
            <div>
                <select 
                    className='Input'
                    value={props.value} 
                    onChange={props.setValue}
                    style={{borderColor: props.borderColor || 'black', borderWidth: props.borderColor ? 2 : 1}}    
                >
                    {
                        props.options.map((el, ind) => (
                            <option value={ind} key={el.symbol}>{el.name.map(el=>t(el)).join(' ')} ({el.symbol})</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default InputOptions;