import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card';

describe('Card Component', () => {
  it('it should render successfully', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card/>, div)
    ReactDOM.unmountComponentAtNode(div);
  });

  describe('when props given', () => {
    it('it displays title and content', () => {
      const tree = renderer.create(
        <Card title='foo' content='bar' />
      ).toJSON()
      expect(tree).toMatchSnapshot();
    });
  })
  
  describe('when NO props given', () => {
    it('should render empty if no title or content is given', () => {
      const tree = renderer.create(
        <Card />
      ).toJSON()
      expect(tree).toMatchSnapshot();
    })
  })
})