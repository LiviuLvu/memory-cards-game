import React, { useState, useEffect } from 'react';

import './App.css';
import Board from "./components/board/Board";

export default function App() {
  const [cards, setCards] = useState([1, 2, 3, 4]);
  const [flipped, setFlipState] = useState([0, 0, 0, 0]);
  // const [solved, setSolved] = useState([0, 0, 0, 0]);
  // const [disabled, setDisabled] = useState(false);

  function flipCards(id) {
    const flipArray = [...flipped];

    flipArray[id] = flipArray[id] === 0 ? 1 : 0;

    setFlipState(flipArray);
    console.log(flipArray, id);
  }

  return (
    <div className="App">
      <h3>
        Memory Game
      </h3>
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
