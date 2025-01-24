import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import "./styles/App.css"
import Register from "./components/Register";
import Footer from "./components/Footer";
import News from "./components/News";


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
