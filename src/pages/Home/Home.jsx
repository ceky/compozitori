import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import './Home.css';
import '../../components/common.css';
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
    <React.Fragment>
      <div className="carousel">
        {categories.length &&
          categories.map((category) => (
            <div
              key={category.id}
              className="button--nuka"
              onClick={() => handleClick(category)}
            >
              {category.name}
            </div>
          ))}
      </div>
    </React.Fragment>
  );
}

export default Home;
