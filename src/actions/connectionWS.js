import io from 'socket.io-client';

export default () => io('ws://localhost:8000');
