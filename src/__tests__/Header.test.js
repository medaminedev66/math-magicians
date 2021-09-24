import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../components/Header';

describe('test the Quote components', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const root = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      root,
    );
    expect(root.querySelector('h1').textContent).toBe('Math Magicians');
  });
});
