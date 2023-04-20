import React from "react";
import "./MovieBuy.css"
import { useContext, useState } from "react";
import { cartContext } from "../../context/cartContext";
// import { Link } from "react-router-dom";
import { createOrder } from '../../services/firestore'
import FormCheckout from "../FormCheckout/FormCheckout";
import MovieBuySuccess from "../MovieBuySuccess/MovieBuySuccess";


export default function MovieBuy() {
    const { cart, getTotalPrice, clearCart } = useContext(cartContext)
    const [buyComplete, setBuyComplete] = useState(false);
    console.log(cart)

    function getIvaTotal(price) {
        return Math.floor(price / 1.21)
    }

    function getIVA(price) {
        return price + getIvaTotal(getTotalPrice());
    }

    async function buyCheckout(userData) {
        const order = {
            item: cart,
            buyer: userData,
            date: new Date(),
            total: getTotalPrice()
        };
        const { id: orderId } = await createOrder(order);
        setBuyComplete({ orderId: orderId, ...order });
        clearCart()
    }


    if (buyComplete) {
        return (
            <>
                <MovieBuySuccess
                    userOrder={buyComplete.item.map(movieItem => `${movieItem.title}: ${movieItem.count} units`)}
                    userData={buyComplete.buyer}
                    userNumber={buyComplete.orderId}
                    userDate={buyComplete.date.toString()}
                    userTotal = {buyComplete.total}
                />
            </>
        );
    }


    return (
        <>
            <h2 className="bg-success text-dark w-75 p-4 mx-auto rounded-pill">Finish your transaction and enter your information to complete the purchase</h2>
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
            <FormCheckout onCheckout={buyCheckout} />
        </>
    )
}

