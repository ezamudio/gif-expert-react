import { render, screen } from '@testing-library/react';
import { GifCard } from '../../src/components/GifCard';

describe('Pruebas en <GifCard/>', () => {
  const title = 'Prueba 1';
  const url = 'https://picsum.photos/200';

  test('Debe de hacer match con el Snapshot', () => {
    const { container } = render(<GifCard title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test('debe de mostrar la imagen con el URL y el ALT indicado', () => {
    render(<GifCard title={title} url={url} />);
    //screen.debug();
    /* expect(screen.getByRole('img').src).toBe(url);
    expect(screen.getByRole('img').alt).toBe(title); */
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('debe de mostrar el título en el componente', () => {
    render(<GifCard title={title} url={url} />);
    expect(screen.getByText(title)).toBeTruthy();
  });
});
