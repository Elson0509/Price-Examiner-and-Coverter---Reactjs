import React from 'react';
import './InputValue.scss'

const InputValue = (props) => {
    return (
        <div className='InputDiv'>
            <div>
                <label className='Label'>{props.label}</label>
            </div>
            <div>
                <input 
                    className='Input'
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