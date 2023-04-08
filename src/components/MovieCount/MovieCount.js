import React from "react";
import "./MovieCount.css";
import { Button } from "react-bootstrap";
import { useState } from "react";

export default function MovieCount({ onAddToCart }) {
    const [count, setCount] = useState(0);
    let limitSubstract = 0;
    let limitAdd = 15;

    const handleAdd = ()=> {
        if(count === limitAdd) {
            document.removeEventListener("click", handleAdd)
        }else{
            setCount(count + 1)
        }
    }

    const handleSubstract = () => {
        if(count === limitSubstract) {
            document.removeEventListener("click", handleSubstract)
        }else{
            setCount(count - 1)
        }
    }
    return(
        <>
        <Button className="btn-danger" onClick={handleSubstract}>
            -
        </Button>

        <div className="count-num">{count}</div>

        <Button className="btn-success" onClick={handleAdd}>
            +
        </Button>

        <Button onClick={()=>{onAddToCart(count)}}>Agregar al carrito</Button>
        </>
    )
}