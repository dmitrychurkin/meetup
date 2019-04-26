import React from 'react';
import { NavLink } from 'react-router-dom';
import siteLogo from 'assets/logo.svg';
import './SiteLogo.css';

const SiteLogo = () => (
    <NavLink 
        to='/'
        className='SiteLogo'
    >
        <img src={siteLogo} alt='meetup site logo' />
    </NavLink>
);

export default SiteLogo;
