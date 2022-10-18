import { screen, within, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import SelectInput from '../components/SelectInput';
const initialState = {};

import { renderWithProviders } from './utils/renderConnected';

test('render with initial city', () => {
  renderWithProviders(<SelectInput />, {
    preloadedState: initialState
  });
  const selectElement = screen.getByTestId('select-test');
  const input = within(selectElement).getByRole('combobox', { expanded: false });
  expect(input).toHaveValue('Ankara');
});

test('dropdown button control', () => {
  renderWithProviders(<SelectInput />, {
    preloadedState: initialState
  });
  const selectElement = screen.getByTestId('select-test');
  const dropButton = screen.getByRole('button', { name: 'Open' });
  fireEvent.click(dropButton);
  const input = within(selectElement).getByRole('combobox', { expanded: true });

  expect(input).toBeInTheDocument();
});
