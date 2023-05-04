import React from 'react';
import { Provider } from 'react-redux';
import {screen, render, fireEvent} from '@testing-library/react';
import FilesPage from '../../src/Views/FilesPage';
import { setupStore } from '../redux/store';

function renderWithProviders(
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}

const setup = () => {
  const utils = renderWithProviders(<FilesPage />)
  const input = screen.getByTestId('filter')
	const button = screen.getByTestId('btn-search')
	const table = screen.getByTestId('table-files')
  return {
    input,
		button,
		table,
    ...utils,
  }
}

test('test si existe el input', async () => {
	const { input } =  setup();
	expect(input).toBeInTheDocument();
})

test('test si existe el boton', async () => {
	const { button } =  setup();
	expect(button).toBeInTheDocument();
})

test('test si existe la tabla', async () => {
	const { table } =  setup();
	expect(table).toBeInTheDocument();
})

test('test evento change par input filtrar', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: 'test2.csv'}})
  expect(input.value).toBe('test2.csv')
})

test('test aplicar evento click al boton search', () => {
	const handleClick = jest.fn()
	const {button} = setup();
	console.log('boton', button);
  expect(handleClick).toHaveBeenCalledTimes(1)
})
