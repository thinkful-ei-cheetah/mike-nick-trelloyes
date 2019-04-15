import './List.css';
import Card from './Card';
import React from 'react';

class List extends React.Component {

  buildCardJSX() {
    return this.props.cards.map((card, i) => {
      return <Card title={card.title} content={card.content} key={i} />
    })
  }

  render() {
    return (
      <section className='List'>
        <header className='List-header'>
          {this.props.header}
        </header>
        <div className='List-cards'>
          {this.buildCardJSX()}
        </div>
      </section>
    );
  }
};

export default List;

