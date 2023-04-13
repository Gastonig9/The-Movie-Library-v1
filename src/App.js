import './App.css';
import MovieContainer from './components/MovieContainer/MovieContainer';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Navegation from './components/Navbar/Navegation';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MovieCategories from './components/MovieCategories/MovieCategories';
import { CartProvider } from './context/cartContext';
import MovieViewWidget from './components/MovieViewWidget/MovieViewWidget';
// import Footer from './components/Footer/Footer';
import MovieBuy from './components/MovieBuy/MovieBuy';
import MovieBuySuccess from './components/MovieBuySuccess/MovieBuySuccess';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <BrowserRouter>
          <Navegation />
          <Routes>
            <Route path='/' element={<MovieContainer />}></Route>
            <Route path='/detalle/:id' element={<MovieDetail />}></Route>
            <Route path='/categories/:categorymovie' element={<MovieCategories />}></Route>
            <Route path='/widget' element={<MovieViewWidget/>}></Route>
            <Route path='/buy' element={<MovieBuy/>}></Route>
            <Route path='/buysuccess' element={<MovieBuySuccess/>}></Route>
            <Route path='*' element={<h1 className='bg-dark text-danger p-3'>404: Not Found</h1>}></Route>
          </Routes>
          {/* <Footer/> */}
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
