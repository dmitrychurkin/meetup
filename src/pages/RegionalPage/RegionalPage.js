import React from 'react';
import { Layout, Nav, ContentContainer, Footer } from 'components';
import './RegionalPage.css';


const RegionalPage = () => (
    <Layout
        className='RegionalPage'
    >
        <Nav className='RegionalPage__nav' />
        <div className='RegionalPage__content'>
            <ContentContainer />
        </div>
        <Footer />
    </Layout>
);

export default RegionalPage;