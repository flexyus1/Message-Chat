
import { useState } from 'react';
import './App.css';
import Join from './components/Join/Join';
import Chat from './components/Chat/Chat';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const [socket, setSocket] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Join setSocket={setSocket} />}
        />
        <Route
          path="/chat"
          element={socket ? <Chat socket={socket} /> : null}
        />
      </Routes>
    </Router>
  );
}

export default App;

