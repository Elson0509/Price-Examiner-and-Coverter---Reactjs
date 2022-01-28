import React from 'react';
import classes from './InputValue.module.css'

const InputValue = (props) => {
    return (
        <div className={classes.InputDiv}>
            <div>
                <label className={classes.Label}>{props.label}</label>
            </div>
            <div>
                <input 
                    className={classes.Input} 
                    type={props.type || 'number'} 
                    value={props.value} 
                    onChange={props.changeValue}
                    style={{borderColor: props.borderColor || 'black', borderWidth: props.borderColor ? 2 : 1}}
                />
            </div>
        </div>
    );
};

export default InputValue;