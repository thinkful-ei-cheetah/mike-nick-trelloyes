import './List.css';
import Card from './Card';

// this.props.cards = [
//   {title: '', content: ''},
//   {title: '', content: ''}
// ]

class List extends React.Component {
  render() {
    const cardsList = this.props.cards.map( (card, id) => {
      const cardId = ``;
      <Card title={this.props.cards.title} content={this.props.cards.content} />
    });

    return (
      <section className='List'>
        <header>{this.props.header}</header>
        <div className='List-cards'></div>
      </section>
    );
  }
};

export default List;

