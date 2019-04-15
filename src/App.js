import React from 'react';
import './App.css';
import List from './List';

function buildCardsArray(cardIds, allCards) {
  return cardIds.map(key => {
    return allCards[key];
  });
};

function App(props) {
  const cardsObj = props.STORE.allCards;

  const listArr = props.STORE.lists.map(list => {
    list.cards = buildCardsArray(list.cardIds, cardsObj)
    return list;
  })

  const listJSX = listArr.map(list => {
    return <List header={list.header} cards={list.cards} key={list.id}/>
  })

  return (
    <main className='App'>
      <header>
        <h1>Trelloyes</h1>
        <div className="App-list">
          {listJSX}
        </div>
      </header>
    </main>
  );
}

export default App;
