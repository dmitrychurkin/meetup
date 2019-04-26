import React from 'react';
import { TitleBlock, SearchBar } from 'components';
import './Jumbo.css';

const Jumbo = () => (
    <div className='Jumbo'>
        <TitleBlock />
        <p className='Jumbo__sub'>
            Find blockchain meetups near you now.
        </p>
        <SearchBar />
    </div>
);

export default Jumbo;