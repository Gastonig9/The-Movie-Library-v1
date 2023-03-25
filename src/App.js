import './App.css';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Navegation from './components/Navbar/Navegation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieContainer/>}></Route>
        <Route path='/detalle/:id' element={<MovieDetail/>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
