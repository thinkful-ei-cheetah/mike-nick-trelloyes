import React from 'react';
import './App.css';

function buildCardsArray(cardIds, allCards) {
  return cardIds.map(key => {
    return allCards[key];
  });
};

function App(props) {
  const cards = buildCardsArray(props.STORE.lists[0].cardIds, props.STORE.allCards);

  return (
    <main className='App'>
      <header>
        <h1></h1>
        <div className="App-list">
        </div>
      </header>
    </main>
  );
}

export default App;
