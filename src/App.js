import React, { useState, useEffect } from 'react';

import './App.css';
import Board from './components/board/Board';
import { generateDeck } from './components/helpers';

export default function App() {
  const [difficulty, setDifficulty] = useState(4);
  const [cards, setCards] = useState([]);
  const [flipped, setFlipState] = useState([]);
  // const [solved, setSolved] = useState([0, 0, 0, 0]);
  // const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    setCards(generateDeck(difficulty));
  }, [difficulty]);

  function increaseLevel() {
    setDifficulty(difficulty + 4);
  }

  function decreaseLevel() {
    setDifficulty(difficulty - 4);
  }

  function flipCards(id) {
    const flipArray = [...flipped];

    flipArray[id] = flipArray[id] !== 0 ? 1 : 1;

    setFlipState(flipArray);
    console.log(flipArray, id);
  }

  return (
    <div className="App">
      <h3>
        Memory Game
      </h3>
      <button onClick={()=>increaseLevel()}>+ Add Cards</button>
      <button onClick={()=>decreaseLevel()}>- Remove</button>
      <Board
        cards={cards}
        flipped={flipped}
        // solved={solved}
        handleClick={flipCards}
        // disabled={disabled}
      />
    </div>
  );
}
