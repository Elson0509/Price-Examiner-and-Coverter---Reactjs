import React from 'react'
import classes from './ButtonActions.module.css'

const ButtonActions = (props) => {
    return (
        <div>
            <div className={classes.DivButtons}>
                <button className={[classes.Button, classes.Button1].join(' ')} onClick={()=>props.action1()}>{props.text1}</button>
                <button className={[classes.Button, classes.Button2].join(' ')} onClick={()=>props.action2()}>{props.text2}</button>
                {props.text3 && <button className={[classes.Button, classes.Button3].join(' ')} onClick={()=>props.action3()}>{props.text3}</button>}
            </div>
        </div>
    );
};

export default ButtonActions;