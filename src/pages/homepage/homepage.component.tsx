import React from 'react';

import WebsocketTest from '../../components/socket-io-test/websocket-test.component';

import './homepage.styles.scss';

const HomePage = () => {
  return (
    <div className="homepage">
      <p>Home Page</p>
      <WebsocketTest />
    </div>
  );
};

export default HomePage;
