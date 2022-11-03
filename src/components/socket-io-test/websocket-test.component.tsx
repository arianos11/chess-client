/* eslint-disable */

import React, { useEffect } from 'react';
import useWebSocket from 'react-use-websocket';

const WebsocketTest = () => {
  const socketUrl = `ws://${process.env.REACT_APP_BACKEND_URL}/ws/test/`;

  const {
    sendMessage,
    sendJsonMessage,
    lastMessage,
    lastJsonMessage,
    readyState,
    getWebSocket,
  } = useWebSocket(socketUrl, {
    onOpen: () => console.log('opened'),
    //Will attempt to reconnect on all close events, such as server shutting down
    shouldReconnect: (closeEvent) => true,
  });

  return (
    <div>
      <p>Socket IO TEST</p>
    </div>
  );
};

export default WebsocketTest;
