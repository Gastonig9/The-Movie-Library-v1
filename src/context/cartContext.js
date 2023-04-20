import { createContext, useState, useEffect } from "react";
import MovieAlert from "../components/MovieAlert/MovieAlert";

const cartContext = createContext({ default: "default" });
const Provider = cartContext.Provider;

function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => setShowAlert(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  function addItem(movie, count) {
    let movieExists = cart.some(movieItem => movieItem.id === movie.id)

    if(movieExists) {
      const newCart = cart.map(item => {
        if(item.id === movie.id) {
          return {...item, count: item.count + count}
        }
        return item;
      });
      setCart(newCart)
    }else {
      const newCart = [...cart, {...movie, count}]
      setCart(newCart)
    }
    setShowAlert(true);
  }

  function getCountInCart() {
    let count = 0;
    for (let i = 0; i < cart.length; i++) {
      count += cart[i].count;
    }
    return count;
  }

  function removeItem(movieId) {
    const newCart = cart.filter((item) => item.id !== movieId);
    setCart(newCart);
    let columnCart = document.getElementById("columnCart");
    if (columnCart) {
      columnCart.remove();
    }
  }

  function getTotalPrice() {
    return cart.reduce((total, item) => total + item.price * item.count, 0);
  }

  function clearCart() {
    setCart([])
  }

  return (
    <Provider value={{ cart, addItem, getCountInCart, removeItem, getTotalPrice, clearCart }}>
      {props.children}
      {showAlert && (
        <div id="alertContainer">
          <MovieAlert amount={cart.length} />
        </div>
      )}
    </Provider>
  );
}

export { cartContext, CartProvider };