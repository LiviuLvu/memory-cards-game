import React, { useState, useEffect } from 'react';

import './App.css';
import Board from './components/board/Board';
import { generateDeck } from './components/helpers';

export default function App() {
  const [difficulty, setDifficulty] = useState(4);
  const [gameOn, setGame] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedId, setFlipPair] = useState([]);
  const [solved, solveCard] = useState([]);

  useEffect(() => {
    setCards(generateDeck(difficulty));
  }, [difficulty]);

  function increaseLevel() {
    setDifficulty(difficulty + 4);
  }

  function flipCards(id) {
    let updatedCards = [...cards];
    let flippedCards = [...flippedId];
    let isMatch = false;

    flippedCards.push(id);
    // compare cards if 2 are flipped
    if(flippedCards.length === 2) {
      isMatch = updatedCards[flippedCards[0]].cardColor === updatedCards[flippedCards[1]].cardColor;

      // solved cards toggle
      if (isMatch) {
        updatedCards[flippedCards[0]].solved = 1;
        updatedCards[flippedCards[1]].solved = 1;
      }

      // reset flip state
      setTimeout(() => {
        updatedCards[flippedCards[0]].flipped = 0;
        updatedCards[flippedCards[1]].flipped = 0;
        setFlipPair([]);
        setCards(updatedCards);
        return;
      }, 1000);
    } else {
      // update current card flip state
      updatedCards[id].flipped = updatedCards[id].flipped === 1 ? 0 : 1;
      if(updatedCards[id].flipped === 0) flippedCards.pop();
    }

    setFlipPair(flippedCards);
    setCards(updatedCards);
    setGame(true);
  }

  return (
    <div className="App">
      <h3>
        Memory Game
      </h3>
      <button disabled={gameOn} onClick={()=>increaseLevel()}>+ Add Cards</button>
      <Board
        cards={cards}
        handleClick={flipCards}
      />
    </div>
  );
}
