import React from 'react';

import SocketIoTest from '../../components/socket-io-test/socket-io-test.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <p>Home Page</p>
      <SocketIoTest />
    </div>
  );
};

export default HomePage;
