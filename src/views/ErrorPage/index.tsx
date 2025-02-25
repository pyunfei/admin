import React from 'react';
import { Result, Button } from 'antd';
import { useHistory } from 'react-router-dom'

interface IProps {
  status?: number | string | undefined;
}

const Index = (props: IProps) => {
  const history = useHistory();

  return <>
    <Result
      status={404}
      title={404}
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary" onClick={() => history.replace('/')}>Back Home</Button>}
    />
  </>
};

export default Index;