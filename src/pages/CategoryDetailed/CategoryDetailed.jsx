import React from 'react';

import './CategoryDetailed.css';

function CategoryDetailed({ category }) {
  return <div className="category-details-container">{category.name}</div>;
}

export default CategoryDetailed;
