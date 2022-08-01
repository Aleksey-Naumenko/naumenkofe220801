import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('render header', () => {
  render(<App />);
  const headerEl = screen.getByText(/Header/i);
  expect(headerEl).toBeInTheDocument();
});

test('render main part', () => {
  render(<App />);
  const headerEl = screen.getByText(/Main Body/i);
  expect(headerEl).toBeInTheDocument();
});

test('render left panel', () => {
  render(<App />);
  const headerEl = screen.getByText(/Left Panel/i);
  expect(headerEl).toBeInTheDocument();
});

test('render right panel', () => {
  render(<App />);
  const headerEl = screen.getByText(/Right Panel/i);
  expect(headerEl).toBeInTheDocument();
});

test('render footer', () => {
  render(<App />);
  const headerEl = screen.getByText(/Footer/i);
  expect(headerEl).toBeInTheDocument();
});
