import React from 'react';
import { Divider } from 'antd';
import BackButton from '../BackButton/BackButton';

function PageHeader({ title }) {
  return (
    <React.Fragment>
      <div className="page-header">
        <BackButton />
        <h1>{title}</h1>
      </div>
      <Divider />
    </React.Fragment>
  );
}

export default PageHeader;
