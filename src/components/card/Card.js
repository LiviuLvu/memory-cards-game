import React from 'react';

import './card.css';

export default function Card({
    handleClick,
    flipped,
    id,
    height,
    symbol,
    width,
  }) {
  return (
    <div
      className='card'
      onClick={() => handleClick(id)}
    >
      <p className={flipped ? 'front' : 'back'} >
        {id}
      </p>
    </div>
  )
}

