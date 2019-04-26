import React from 'react';
import { NavLink } from 'react-router-dom';
import classname from 'classnames';
import { SiteLogo } from 'components';
import './Nav.css';

const Nav = ({ links, className }) => (
    <div className={classname('Nav', className)}>
        <SiteLogo />
        <div className='Nav__links'>
            {
                links.map(({ text, link }) => (
                    <NavLink
                        key={text}
                        to={`/region/${link}`}
                        className='Nav__link'
                    >
                        {text}
                    </NavLink>
                ))
            }
        </div>
    </div>
);

Nav.defaultProps = {
    links: [
        {
            link: 'san-francisco',
            text: 'San Francisco'
        },
        {
            link: 'san-jose',
            text: 'San Jose'
        },
        {
            link: 'seattle',
            text: 'Seattle'
        }
    ]
}

export default Nav;