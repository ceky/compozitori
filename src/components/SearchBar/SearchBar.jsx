import React, { useState } from 'react';
import { Button, Dropdown, Input, Menu } from 'antd';
import { DownOutlined } from '@ant-design/icons';

import './SearchBar.css';
import MenuItem from 'antd/lib/menu/MenuItem';

function SearchBar({ onSearch }) {
  const { Search } = Input;

  const [selectedCriteria, setSelectedCriteria] = useState('Alege criteriul');

  function handleMenuClick(value) {
    menuList.forEach((item) => {
      if (item.key === value.key) {
        setSelectedCriteria(item.title);
      }
    });
  }

  const menuList = [
    { key: '1', title: 'Titlu' },
    { key: '2', title: 'Nume compozitor' },
    { key: '3', title: 'Data nasterii' },
    { key: '4', title: 'Anul compozitiei' },
    { key: '5', title: 'Detalii' },
  ];

  const menu = (
    <Menu onClick={handleMenuClick}>
      {menuList.map((item) => (
        <MenuItem key={item.key}>{item.title}</MenuItem>
      ))}
    </Menu>
  );

  function onSearch(value) {
    alert(value);
  }

  return (
    <div className="search-container">
      <Search
        placeholder="Spectacol"
        allowClear
        enterButton="Caută"
        size="large"
        onSearch={onSearch}
      />

      <Dropdown overlay={menu}>
        <Button type="primary">
          {selectedCriteria} <DownOutlined />
        </Button>
      </Dropdown>
    </div>
  );
}

export default SearchBar;
