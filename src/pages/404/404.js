import React from 'react';
import { Link } from 'react-router-dom';
import './404.css';

const NotFound = () => (
  <div className='NotFound'>
    <h3 className='NotFound__head'>
      <Link to='/'>
        Go back to home page
      </Link>
    </h3>
    <h1 className='NotFound__foot'>Sorry, page not found...</h1>
  </div>
);

export default NotFound;