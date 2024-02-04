import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";
import io from "socket.io-client"

export default function Join({ setSocket }) {
  const navigate = useNavigate();
  const usernameRef = useRef();

  const handleSubmit = async () => {
    const username = usernameRef.current.value;
    if (!username.trim()) return;

    const socket = io.connect('http://localhost:3001');

    // Aguarde a conexão ser estabelecida antes de prosseguir
    await new Promise(resolve => socket.on('connect', resolve));

    socket.emit('set_username', username);
    setSocket(socket);

    navigate('/chat');
  }

  return (
    <div>
      <h1>Join</h1>
      <input type="text" ref={usernameRef} placeholder="Username" />
      <button onClick={handleSubmit}>Enter</button>
    </div>
  );
}
