import React from 'react';
import './App.css';
import List from './List';

function buildCardsArray(cardIds, allCards) {
  return cardIds.map(key => {
    return allCards[key];
  });
};

function App(props) {
  const arrayOfLists = props.STORE.lists.map( list =>
    <List 
      key={list.id} 
      header={list.header} 
      cards={buildCardsArray(list.cardIds, props.STORE.allCards)} 
    />
  );

  return (
    <main className='App'>
      <header className='App-header'>
        <h1>Trelloyes!</h1>
        <div className="App-list">
          {arrayOfLists}
        </div>
      </header>
    </main>
  );
}

export default App;
