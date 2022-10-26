import { PropTypes } from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifCard } from './GifCard';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {/* Esto se podría hacer con un custom component */}
      {isLoading && <h2>Cargando...</h2>}
      <div className='card-grid'>
        {images.map((image) => (
          <GifCard key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
