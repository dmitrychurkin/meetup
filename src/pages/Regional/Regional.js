import React from 'react';
import { Route } from 'react-router-dom';
import { Layout, Nav, Footer } from 'components';
import { ContentContainer } from 'containers';
import './Regional.css';


const Regional = () => (
    <Layout
        className='Regional'
    >
        <Nav className='Regional__nav' />
        <div className='Regional__content'>
            <Route
                path='/region/:city/:event?'
                component={ContentContainer}
            />
        </div>
        <Footer />
    </Layout>
);


export default Regional;