import React, { useState, useEffect } from 'react';

import './App.css';
import Board from './components/board/Board';
import { generateDeck } from './components/helpers';

export default function App() {
  const [difficulty, setDifficulty] = useState(4);
  const [gameOn, setGame] = useState(false);
  const [gameWon, setWin] = useState(false);
  const [cards, setCards] = useState([]);
  const [flippedId, setFlipPair] = useState([]);

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

    // was the same card clicked?
    if (cards[id].flipped === 1) {
      updatedCards[id].flipped = 0;
      flippedCards.pop();
      setFlipPair(flippedCards);
      setCards(updatedCards);
      return;
    }

    // flipping a new card
    if (cards[id].flipped === 0) {
      updatedCards[id].flipped = 1;
      flippedCards.push();
      setFlipPair(flippedCards);
      setCards(updatedCards);
    }

    flippedCards.push(id);

    // compare cards if 2 are flipped
    if(flippedCards.length === 2) {
      isMatch = updatedCards[flippedCards[0]].cardColor === updatedCards[flippedCards[1]].cardColor;

      // solved cards toggle
      if (isMatch) {
        updatedCards[flippedCards[0]].solved = 1;
        updatedCards[flippedCards[1]].solved = 1;
      }

      setTimeout(() => {
        // reset flip state in case match is false
        updatedCards[flippedCards[0]].flipped = 0;
        updatedCards[flippedCards[1]].flipped = 0;
        setFlipPair([]);
        setCards(updatedCards);

        const gameStillOn = cards.every((card) => {
          return card.solved === 1;
        });
        setWin(gameStillOn);

        return;
      }, 300);
    }

    setGame(true);
  }

  function setGameState() {
    setGame(false);
    setWin(false);
    setCards(generateDeck(difficulty));
  }

  return (
    <div className="App">
      {gameWon ? (
        <>
          <h1 className={"alert"}>You Win!</h1>
          <button onClick={()=>setGameState()}>Restart</button>
        </>
      ) : (
        <>
          <h3>Color memory game</h3>
          <button disabled={gameOn} onClick={()=>increaseLevel()}>+ Add Cards</button>
        </>
      ) }


      <Board
        cards={cards}
        handleClick={flipCards}
      />
    </div>
  );
}
