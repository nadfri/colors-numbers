import { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Menu from "../views/Menu/Menu";
import Colors from "../views/Colors/Colors";
import Numbers from "../views/Numbers/Numbers";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LangContext } from "../utils/LangContext";

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <div className="App">
      <LangContext.Provider value={{ lang, setLang }}>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path="/" element={<Menu />} />
              <Route path="/colors" element={<Colors />} />
              <Route path="/numbers" element={<Numbers />} />
              <Route path="*" element={<Menu />} />
            </Routes>
          </main>
        </BrowserRouter>
      </LangContext.Provider>
    </div>
  );
}

export default App;
