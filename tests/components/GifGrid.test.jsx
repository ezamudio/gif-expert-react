import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
  const category = 'Dragon Ball Z';

  test('debe de mostrar el loading incialmente', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);
    //screen.debug();

    expect(screen.getByText(category));
    expect(screen.getByText('Cargando...'));
  });

  test('debe de mostrar items cuando se cargan las imágenes utilizando el useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Goku',
        url: 'https://localhost/goku.jpg',
      },
      {
        id: '123',
        title: 'Vegueta',
        url: 'https://localhost/vegueta.jpg',
      },
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    //screen.debug();

    expect(screen.getAllByRole('img').length).toBe(2);
  });
});
