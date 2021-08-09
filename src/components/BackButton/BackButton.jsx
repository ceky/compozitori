import React from 'react';
import { Button } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';

function BackButton() {
  const history = useHistory();

  return <Button icon={<LeftOutlined />} onClick={() => history.goBack()} />;
}

export default BackButton;
