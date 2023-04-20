import "./MovieBuySuccess.css"

export default function MovieBuySuccess(props) {
    return (
        <>
            <div className="ticket">
                <h1 class="success-title">The purchase made successfully!</h1>
                <br/>
                <img src="https://i.ibb.co/thn6snz/ticket.png" className="ticketImg"/>
                <h6>Your name: {props.userData.username} </h6>
                <p>Email: {props.userData.email} </p>
                <p>Phone: {props.userData.phone} </p>
                <hr class="border border-dark border-1"></hr>
                <p>Code for your order: {props.userNumber}  </p>
                <hr class="border border-dark border-1"></hr>
                <p>Date: {props.userDate} </p>
                <hr class="border border-dark border-1"></hr>
                <h6>Buy: {props.userOrder} </h6>
                <h6>Total: {props.userTotal}</h6>
            </div>
        </>
    )
}