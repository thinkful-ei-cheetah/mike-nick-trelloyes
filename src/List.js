import React from 'react';
import './List.css';
import Card from './Card';

class List extends React.Component {
  render() {
    const cardsList = this.props.cards.map( (card, index) => 
      <Card key={index} title={card.title} content={card.content} />
    );

    return (
      <section className='List'>
        <header className='List-header'>
          <h2>{this.props.header}</h2>
        </header>
        <div className='List-cards'>{cardsList}</div>
      </section>
    );
  }
};

export default List;

