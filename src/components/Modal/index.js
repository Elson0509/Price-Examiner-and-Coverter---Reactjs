import React from 'react';
import classes from './Modal.module.css'

const Modal = (props) => {
    return (
        props.modal &&
            <div className={classes.Modal}>
                <div className={classes.ModalContent}>
                    <div>
                    <span className={classes.Close} onClick={()=>props.setModal(false)}>&times;</span>
                    </div>
                    <div className={classes.Content}>
                        {
                            props.children
                        }
                    </div>
                    
                </div>
            </div>
    );
};

export default Modal;