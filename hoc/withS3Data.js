import React from 'react';
import { getS3Data } from '../utils/getS3Data';

const withS3Data = (WrappedComponent) => (props) => {
  const getData = async () => {
    const config = await getS3Data();
    return config;
  };

  return <WrappedComponent {...props} getHocS3Data={getData} />;
};

export default withS3Data;
