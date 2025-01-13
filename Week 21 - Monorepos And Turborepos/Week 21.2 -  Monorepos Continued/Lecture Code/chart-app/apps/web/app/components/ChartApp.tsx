"use client"

import { useState } from 'react';

const ChartApp = () => {
  const [roomName, setRoomName] = useState('');
  const [roomDescription, setRoomDescription] = useState('');

  const handleCreateRoom = () => {
    // Logic to create a room can be added here
    console.log('Room Created:', { roomName, roomDescription });
  };

  return (
    
    <div >
      <h1>Create a Room</h1>
      <input
        type="text"
        placeholder="Room Name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Room Description"
        value={roomDescription}
        onChange={(e) => setRoomDescription(e.target.value)}
      />
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
    
  );
};

export default ChartApp;