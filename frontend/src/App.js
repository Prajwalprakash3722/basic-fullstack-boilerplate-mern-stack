import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import ProfilePage from "./pages/Profile";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
function App() {
  const [token, settoken] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      settoken(token);
    }
  }, []);

  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/profile"
            element={token ? <ProfilePage /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
