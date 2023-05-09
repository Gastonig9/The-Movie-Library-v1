import React from "react"
import "./MovieAlert.css"

export default function MovieAlert(props) {
    return (
        <div className="alert alert-warning alert-dismissible fade show w-100 mx-auto animate__animated animate__fadeIn alertAdd" role="alert">
            The movie has been added to the cart <strong>There are now {props.amount} items in the cart</strong>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    )
}