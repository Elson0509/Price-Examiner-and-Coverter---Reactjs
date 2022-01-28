import React from 'react';
import classes from './InputOptions.module.css'
import { useTranslation } from 'react-i18next'

const InputOptions = (props) => {
    const { t } = useTranslation()
    return (
        <div className={classes.InputDiv}>
            <div>
                <label className={classes.Label}>{props.label}</label>
            </div>
            <div>
                <select 
                    className={classes.Input} 
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