import React from 'react';
import TableCategories from '../../components/tables/TableCategories/TableCategories';

import './CategoryDetailed.css';

function CategoryDetailed({ category }) {
  return (
    <div className="main-container-category">
      <TableCategories opere={category.opere} />
    </div>
  );
}

export default CategoryDetailed;
