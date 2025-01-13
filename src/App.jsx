import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login';
import "./styles/App.css"
import Register from "./components/Register";

const advertisements=[
  {
    title: "Ad 1",
    description: "This is the first advertisement.",
    image: "https://i.postimg.cc/v80JCSCh/bib2.jpg",
  },
  {
    title: "Ad 2",
    description: "This is the second advertisement.",
    image: "https://i.postimg.cc/8kwGNCfh/bible1.jpg",
  },
  {
    title: "Ad 3",
    description: "This is the third advertisement.",
    image: "https://i.postimg.cc/NMHKZHj7/bible.jpg",
  },
]
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home advertisements={advertisements} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
