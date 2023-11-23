import React from "react";
import './styles/App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Header from "./components/UI/header/Header.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/posts" element={<Posts/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
