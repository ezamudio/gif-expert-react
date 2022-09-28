import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['Game of Thrones']);

  const onAddCategory = (newCategory) => {
    //setCategories([...categories, 'Digimon']);
    //setCategories((prv) => ['Digimon', ...prv]);
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      {/* título */}
      <h1>GifExpertApp</h1>
      {/* Input */}
      <AddCategory
        //setCategories={setCategories}
        onNewCategory={onAddCategory}
      />
      {/* Listado de Gif */}

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}

      {/* Gif Item */}
    </>
  );
};
