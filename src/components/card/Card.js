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
      onClick={() => handleClick(id)}
      className='card'>
      <div
        className={flipped ? 'visible' : 'hidden'}
        style = {{backgroundColor: `${symbol}`}} >
        <p>
          {symbol}
        </p>
      </div>
    </div>
  )
}

