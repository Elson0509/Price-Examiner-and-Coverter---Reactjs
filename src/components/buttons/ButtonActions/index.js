import React from 'react'
import './ButtonActions.scss'

const ButtonActions = (props) => {
    return (
        <div>
            <div className='DivButtons'>
                <button className='Button Button1' onClick={()=>props.action1()}>{props.text1}</button>
                <button className='Button Button2' onClick={()=>props.action2()}>{props.text2}</button>
                {props.text3 && <button className='Button Button3' onClick={()=>props.action3()}>{props.text3}</button>}
            </div>
        </div>
    );
};

export default ButtonActions;