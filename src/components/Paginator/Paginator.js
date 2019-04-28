import React from 'react';
import './Paginator.css';

const Paginator = ({ total }) => {
  const itemCount = total > 4 ? 4 : total;

  return (
    <div className='Paginator'>
      <div className='Paginator__arr left' />
      <div className='Paginator__items'>
        {
          Array(itemCount).fill(true).map((_, i) => (
            <div
              key={i.toString()}
              className='Paginator__item'
            >
              {i + 1}
            </div>
          ))
        }
      </div>
      <div className='Paginator__arr right' />
    </div>
  );
};

export default Paginator;