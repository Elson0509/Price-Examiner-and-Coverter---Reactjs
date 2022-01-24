import React, { Fragment } from 'react';
import Header from '../Header';

const Page = (props) => {
    return (
        <Fragment>
            <Header/>
            <main>
                {props.children}
            </main>
        </Fragment>
    );
};

export default Page;