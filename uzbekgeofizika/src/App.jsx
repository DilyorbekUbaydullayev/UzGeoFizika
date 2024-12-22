import { useState, useEffect } from 'react';
import {jwtDecode} from 'jwt-decode';
import SignIn from './pages/sign in/SignIn';
import './App.css';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';

function App() {
  const navigate = useNavigate();
  const [role, setRole] = useState(null);
  const token = null;

  useEffect(() => {
    if (token) {
      try {
        const decoded = jwtDecode(token);
        setRole(decoded.role);
      } catch (error) {
        console.error("Invalid token", error);
        setRole(null);
      }
    } else {
      setRole(null);
    }
  }, [token]);

  if (!token) {
    return (
      <div className="App">
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} /> 
        </Routes>
      </div>
    );
  }

  if (role === 'admin') {
    return (
      <div></div>
    );
  }

  if (role === 'user') {
    return (
      <div className="App">
        
      </div>
    );
  }

  return null;
}

export default App;