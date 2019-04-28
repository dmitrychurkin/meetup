import React from 'react';
import classnames from 'classnames';
import './Button.css';

const Button = ({ className, back, onClick, children }) => (
  <button
    className={classnames('Button', { back }, className)}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;