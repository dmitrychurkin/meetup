import React from 'react';
import { TitleBlock } from 'components';
import './Footer.css';

const Footer = () => (
    <div className='Footer'>
        <div className='Footer__wrap'>
            <TitleBlock
                containerClassName='Footer__tblock'
                contentClassName='Footer__ttext'
            />
            <div className='Footer__contact'>
                Contact: fake@email.com
            </div>
        </div>
    </div>
);

export default Footer;