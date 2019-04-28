import React from 'react';
import './SearchBar.css';

const SearchBar = () => (
    <div className='SearchBar'>
        <input
            className='SearchBar__ipt'
            name='search'
            placeholder='123 Street Name Ave, San Jose, 95129'
        />
        <button type='button' className='SearchBar__btn' />
    </div>
);

export default SearchBar;