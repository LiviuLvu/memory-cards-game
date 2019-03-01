import React from 'react'

import Card from '../card/Card';
import './board.css'

export default function Board({ cards, handleClick }) {
  return (
    <div className='board'>
      {cards.map((card) => (
        <Card
          key={card.id}
          handleClick={() => { handleClick(card.id) }}
          flipped={card.flipped}
          id={card.id}
          symbol={card.cardColor}
          solved={card.solved}
        />
      ))}
    </div>
  )
}
