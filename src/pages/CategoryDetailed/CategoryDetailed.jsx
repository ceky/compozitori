import React from 'react';
import TableCategories from '../../components/tables/TableCategories/TableCategories';

import './CategoryDetailed.css';

function CategoryDetailed({ category }) {
  return (
    <div>
      <div className="category-details-container">
        <p className="category-name">{category.name}</p>
      </div>
      <TableCategories />
    </div>
  );
}

export default CategoryDetailed;
