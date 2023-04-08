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
    const newCart = [...cart];
    newCart.push({ ...movie, count });
    setCart(newCart);
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

  return (
    <Provider value={{ cart, addItem, getCountInCart, removeItem }}>
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
