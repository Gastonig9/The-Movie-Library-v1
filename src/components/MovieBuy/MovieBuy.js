import React from "react";
import "./MovieBuy.css"
import { useContext } from "react";
import { cartContext } from "../../context/cartContext";
import { Link } from "react-router-dom";

export default function MovieBuy() {
    const { cart, getTotalPrice } = useContext(cartContext)

    function getIvaTotal(price) {
        return Math.floor(price / 1.21)
    }

    function getIVA(price) {
        return price + getIvaTotal(getTotalPrice());
    }
    return (
        <>
            <h2 className="bg-success text-dark w-75 p-3 mx-auto">Buy movie</h2>
            <div className="container ">
                <div className="row rowContain">
                    <div className="col-9 columnTitle p-2">
                        <h1>This is the summary of your purchase</h1>
                    </div>
                    <div className="col-4 columnDescription p-2">
                        {cart.map(movieItem => (
                            <>
                                <h4>{`${movieItem.title}: ${movieItem.count} units`}</h4>
                                <hr className="border border-dark border-1 opacity-50"></hr>
                            </>
                        ))}
                    </div>
                    <div className="col-6 columnItems text-start p-2">
                        <h6 className="">Subtotal: <strong>{"$" + getTotalPrice()}</strong></h6>
                        <hr className="border border-dark border-1 opacity-50"></hr>
                        <h6>IVA: {"$" + getIvaTotal(getTotalPrice())}</h6>
                        <hr className="border border-dark border-1 opacity-50"></hr>
                        <h1>Total: {"$" + getIVA(getTotalPrice())} <strong></strong> </h1>
                    </div>
                </div>
            </div>
            <Link to= '/buysuccess'>
            <button className="btn btn-success p-3 w-50 mx-auto mt-5">
                Buy now
            </button>
            </Link>
        </>
    )
}