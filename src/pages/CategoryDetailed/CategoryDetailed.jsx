import React, { useState } from 'react';
import TableCategories from '../../components/tables/TableCategories/TableCategories';
import MusicSubcategories from '../../components/musicSubcategories/MusicSubcategories';

import './CategoryDetailed.css';

function CategoryDetailed({ category }) {
  const [opere, setOpere] = useState(category.opere);

  const handleSubcategoryChange = (selectedSubcategoryOpere) => {
    setOpere(selectedSubcategoryOpere);
  };

  const cleanTable = () => {
    setOpere([]);
  };

  return (
    <div className="main-container-category">
      {!!category.subcategorii && !!category.subcategorii.length && (
        <MusicSubcategories
          mainCategory={category}
          subcategories={category.subcategorii}
          handleSubcategoryChange={(selectedSubcategoryOpere) =>
            handleSubcategoryChange(selectedSubcategoryOpere)
          }
          cleanTable={cleanTable}
        />
      )}
      <TableCategories opere={opere} />
    </div>
  );
}

export default CategoryDetailed;
