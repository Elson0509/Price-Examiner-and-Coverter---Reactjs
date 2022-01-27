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
                <select className={classes.Input}>
                    {
                        props.options.map(el => (
                            <option value={el} key={el.symbol}>{el.name.map(el=>t(el)).join(' ')} ({el.symbol})</option>
                        ))
                    }
                </select>
            </div>
        </div>
    );
};

export default InputOptions;