import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';
import { getCategoriesJson } from '../../services/Categories';

function Home({ onOpenCategory }) {
  const history = useHistory();
  const [categories, setCategories] = useState({});

  useEffect(() => {
    setCategories(getCategoriesJson());
  }, []);

  function handleClick(category) {
    onOpenCategory(category);
    history.push('/music-style');
  }

  return (
    <div>
      <div className="carousel">
        {categories.length &&
          categories.map((category) => (
            <div
              key={category.id}
              className="carousel-cell"
              onClick={() => handleClick(category)}
            >
              {category.name}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
