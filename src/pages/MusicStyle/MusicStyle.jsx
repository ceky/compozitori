import React, { useState, useEffect } from 'react';
import { Input } from 'antd';

import './MusicStyle.css';
import { getPerformanceListJson } from '../../services/PerformanceList';

function MusicStyle({ selectedCategory }) {
  const { Search } = Input;

  const [performanceList, setPerformanceList] = useState({});

  useEffect(() => {
    setPerformanceList(getPerformanceListJson());
  }, []);

  function onSearch(value) {
    alert(value);
  }

  return (
    <main>
      <h1>{selectedCategory.name}</h1>

      <Search
        placeholder="Spectacol"
        allowClear
        enterButton="Cauta"
        size="large"
        onSearch={onSearch}
      />

      {performanceList.length &&
        performanceList.map((item) => {
          if (item.Stil === selectedCategory.name) {
            return <div key={item.id}>{item.Titlu}</div>;
          }
        })}
    </main>
  );
}

export default MusicStyle;
