import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import App from '../App';

describe('App', () => {
  it('renders elements', () => {
    const screen = render(<App />);

    expect(screen.getByText(/DEMO/)).toBeDefined();

    const input = screen.getByPlaceholderText('Enter a language');
    expect(input).toBeDefined();

    const value = 'Javascript';
    fireEvent.changeText(input, value);
    fireEvent.press(screen.getByText(value));
    expect(input.props.value).toBe(value);
  });
});
