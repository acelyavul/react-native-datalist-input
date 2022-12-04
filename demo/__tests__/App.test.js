import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../App';

describe('renders App correctly', () => {
  it('renders home screen after splash', () => {
    const screen = render(<App />);

    expect(screen.getByText(/DEMO/)).toBeDefined();

    const input = screen.getAllByPlaceholderText('Enter a language');
    expect(input).toBeDefined();
  });
});
