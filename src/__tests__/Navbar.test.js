import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';

describe('test the Quote components', () => {
  it('renders without errors', () => {
    const root = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Navbar />
      </Router>,
      root,
    );
  });

  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTestId } = render(
      <Router>
        <Navbar />
      </Router>,
    );
    expect(queryByTestId('2')).toBeTruthy();
  });
});
