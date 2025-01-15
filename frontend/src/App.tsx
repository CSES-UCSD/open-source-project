import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Note from "./pages/Note";
import Upload from "./pages/Upload";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <BrowserRouter>
    <div>
      <NavBar isLoggedIn={isLoggedIn} />

      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/note" element={<Note />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>

      <div style={{ margin: '20px', textAlign: 'center' }}>
        <button onClick={toggleLogin} style={buttonStyle}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </div>
    </BrowserRouter>
  );
}

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: '#f4b400',
  color: '#001a33',
  border: 'none',
  borderRadius: '5px',
};

export default App;
