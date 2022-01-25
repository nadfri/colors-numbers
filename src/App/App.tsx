import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../views/Menu/Menu";
import Colors from "../views/Colors/Colors";
import Numbers from "../views/Numbers/Numbers";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/colors" element={<Colors />} />
          <Route path="/numbers" element={<Numbers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
