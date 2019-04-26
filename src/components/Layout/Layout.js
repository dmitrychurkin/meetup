import React from 'react';
import classnames from 'classnames';
import './Layout.css';

const Layout = ({ children, className }) => (
    <div className={classnames('Layout', className)}>
        {children}
    </div>
);

export default Layout;