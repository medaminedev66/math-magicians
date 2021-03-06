import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

describe('Test Calculator component', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Calculator />);
    expect(getByText('AC')).not.toBeNull();
  });

  it('matches snapshot', () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('makes an operation ', () => {
    const { getByText, queryByTitle } = render(<Calculator />);
    fireEvent.click(getByText('8'));
    fireEvent.click(getByText('+'));
    fireEvent.click(getByText('4'));
    fireEvent.click(getByText('='));
    expect(queryByTitle('input').textContent).toBe('12  ');
  });
});
