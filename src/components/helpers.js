export function generateDeck(difficulty) {
  let cardsCount = difficulty / 2;
  let cardsArray = [];

  while (cardsCount > 0) {
    // https://www.paulirish.com/2009/random-hex-color-code-snippets/
    const cardColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    cardsArray.push({cardColor});
    cardsArray.push({cardColor});
    cardsArray = shuffle(cardsArray);
    cardsArray = cardsArray.map((card, id) => {
      return {
        ...card,
        id,
        flipped: 0,
        solved: 0
      }
    });

    console.log(cardsArray);
    cardsCount -= 1;
  }

  return cardsArray;
}

// https://stackoverflow.com/questions/6274339/how-can-i-shuffle-an-array
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
