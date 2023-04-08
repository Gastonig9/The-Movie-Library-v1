import React from "react";
import "./MovieWidget.css";
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";

export default function MovieWidget(props) {
  const { getCountInCart } = useContext(cartContext)
  return (
    <div className="cart-widget">
      <img src={props.imageURL} alt="Cart Icon" />
      <p>{getCountInCart()}</p>
    </div>
  );
}