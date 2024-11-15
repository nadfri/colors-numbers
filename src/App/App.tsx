import './App.scss';
import NavBar from '../components/NavBar/NavBar';
import Menu from '../views/Menu/Menu';
import Colors from '../views/Colors/Colors';
import Numbers from '../views/Numbers/Numbers';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from '../Context/LangContext';
import PwaBtn from '../components/PwaBtn/PwaBtn';

function App() {
  return (
    <div className='App'>
      <LangProvider>
        <BrowserRouter>
          <NavBar />
          <main>
            <Routes>
              <Route path='/' element={<Menu />} />
              <Route path='/colors' element={<Colors />} />
              <Route path='/numbers' element={<Numbers />} />
              <Route path='*' element={<Menu />} />
            </Routes>
          </main>
        </BrowserRouter>
        <PwaBtn />
      </LangProvider>
    </div>
  );
}

export default App;
