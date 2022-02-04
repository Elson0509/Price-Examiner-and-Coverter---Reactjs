import React from 'react';
import './Modal.scss'

const Modal = (props) => {
    return (
        props.modal &&
            <div className='Modal'>
                <div className='ModalContent'>
                    <div>
                    <span className='Close' onClick={()=>props.setModal(false)}>&times;</span>
                    </div>
                    <div className='Content'>
                        {
                            props.children
                        }
                    </div>
                </div>
            </div>
    );
};

export default Modal;