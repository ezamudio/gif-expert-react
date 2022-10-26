import { fireEvent, render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  test('Debe de hacer match con el Snapshot', () => {
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });

  test('debe de agregar una nueva categoria', () => {
    render(<GifExpertApp />);
    //screen.debug();
    const input = screen.getByPlaceholderText('Buscar gifs');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Goku' } });
    fireEvent.submit(form);

    //screen.debug();

    expect(screen.getByText('Goku')).toBeTruthy();
  });

  test('debe de checar que no se agrueguen categorías repetidas', () => {
    render(<GifExpertApp />);
    const input = screen.getByPlaceholderText('Buscar gifs');
    const form = screen.getByRole('form');

    fireEvent.input(input, { target: { value: 'Goku' } });
    fireEvent.input(input, { target: { value: 'Goku' } });
    fireEvent.submit(form);

    //expect(screen.getAllByText('Goku').length).toBeLessThan(2);
    expect(screen.getAllByText('Goku').length).toBe(1);
  });
});
