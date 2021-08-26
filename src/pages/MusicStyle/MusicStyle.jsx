import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Table } from 'antd';

import './MusicStyle.css';
import { getPerformanceListJson } from '../../services/Compozitori';

function MusicStyle({ selectedCategory, onTableRowClick }) {
  const history = useHistory();

  const [performanceList, setPerformanceList] = useState({});
  const [columns, setColumns] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    setPerformanceList(getPerformanceListJson());
  }, []);

  useEffect(() => {
    if (!performanceList.length) return;

    const columns = [
      {
        title: 'Titlu',
        dataIndex: 'titlu',
        key: 'titlu',
      },
      {
        title: 'Nume compozitor',
        dataIndex: 'numeCompozitor',
        key: 'numeCompozitor',
      },
      {
        title: 'Data nasterii',
        dataIndex: 'dataNasterii',
        key: 'dataNasterii',
      },
      {
        title: 'Anul compozitiei',
        dataIndex: 'anulCompozitiei',
        key: 'anulCompozitiei',
      },
      {
        title: 'Detalii',
        dataIndex: 'detalii',
        key: 'detalii',
      },
    ];
    setColumns(columns);

    const data = [];
    performanceList.map((item) => {
      if (item.Stil === selectedCategory.name) {
        data.push({
          key: item.id,
          titlu: item.Titlu,
          numeCompozitor: item.NumeCompozitor,
          dataNasterii: item.n,
          anulCompozitiei: item.AnulComp,
          detalii: item.Detalii,
        });
      }
    });
    setData(data);
  }, [performanceList]);

  function handleRowClick(record) {
    onTableRowClick(record);
    history.push('/performance-details');
  }

  function handleSearch(searchValue, selectedCriteria) {
    console.log(searchValue, selectedCriteria);
  }

  return (
    <React.Fragment>
      <Table
        columns={columns}
        dataSource={data}
        onRow={(record) => {
          return {
            onClick: () => handleRowClick(record),
          };
        }}
      />
    </React.Fragment>
  );
}

export default MusicStyle;
