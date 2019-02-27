import React from 'react'

import Card from '../card/Card';
import './board.css'

export default function Board({ cards, flipped, handleClick }) {
  return (
    <div className='board'>
      {cards.map((card, id) => (
        <Card
          key={card}
          handleClick={handleClick}
          flipped={flipped[id]}
          id={id}
        />
      ))}
    </div>
  )
}
