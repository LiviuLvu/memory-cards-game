import React from 'react'

import Card from '../card/Card';
import './board.css'

export default function Board({ cards, flipped, handleClick }) {
  return (
    <div className='board'>
      {cards.map((card, id) => (
        <Card
          key={id}
          handleClick={handleClick}
          flipped={flipped[id]}
          id={id}
          symbol={card}
        />
      ))}
    </div>
  )
}
