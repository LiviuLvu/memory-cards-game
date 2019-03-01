import React from 'react';

import './card.css';

export default function Card({ handleClick, flipped, id, symbol, solved }) {
  return (
    <div
      onClick={() => handleClick(id)}
      className='card'>
      <div
        className={flipped || solved ? 'visible' : 'hidden'}
        style = {{backgroundColor: `${symbol}`}} >
        <p>
          {symbol}
        </p>
      </div>
    </div>
  )
}

