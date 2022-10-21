import React, { useEffect } from 'react';
import { io, Socket } from 'socket.io-client';

interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

interface ClientToServerEvents {
  hello: () => void;
}

const SocketIoTest = () => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    `${process.env.REACT_APP_BACKEND_URL}/flower`,
  );

  useEffect(() => {
    socket.emit('hello');
  }, [socket]);

  return (
    <div>
      <p>Socket IO TEST</p>
    </div>
  );
};

export default SocketIoTest;
