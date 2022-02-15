import React from 'react';
import './LoadingSuspense.scss'

const LoadingSuspense = () => {
    return (
        <div className='wrapper'>
            <div className='cubeWrapper'>
                <div className='cubeFolding'>
                    <span className='leaf1'></span>
                    <span className='leaf2'></span>
                    <span className='leaf3'></span>
                    <span className='leaf4'></span>
                </div>
                <span className='loading' data-name="Loading">Carregando...</span>
            </div>
        </div>
    );
};

export default LoadingSuspense;