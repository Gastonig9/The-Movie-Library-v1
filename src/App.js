import './App.css';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Navegation from './components/Navbar/Navegation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieCategories from './components/MovieCategories/MovieCategories';


function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<MovieContainer/>}></Route>
        <Route path='/detalle/:id' element={<MovieDetail/>}></Route>
        <Route path='/categories/:categorymovie' element={<MovieCategories/>}></Route>
        <Route path='*' element={<h1 className='bg-dark text-danger p-3'>404: Not Found</h1>}></Route>
      </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
