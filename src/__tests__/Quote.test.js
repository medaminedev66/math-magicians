import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import Quote from '../pages/Quote';

describe('test the Quote components', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<Quote />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const { queryByTitle } = render(<Quote />);
    expect(queryByTitle('quote').innerHTML).toContain(
      'Mathematics is not about numbers',
    );
  });
});
