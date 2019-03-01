import React from 'react';

import './card.css';

export default function Card({ handleClick, flipped, id, symbol, solved }) {
  const found = solved ? 'found' : null;
  return (
    <div
      onClick={() => handleClick(id)}
      className={`card ${found}`}>
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

