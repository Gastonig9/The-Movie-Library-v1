import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./MovieViewWidget.css"
import { cartContext } from "../../context/cartContext";

function MovieViewWidget() {
  const { cart, removeItem } = useContext(cartContext);

  return (
    <div className='bg-dark text-light w-50 mt-5 mx-auto p-2'>
      <table className='w-100'>
        <thead>
          <tr id='columnCart'>
          <th className='pb-2 mb-4 border-bottom border-danger p-3'>Miniature</th>
            <th className='pb-2 mb-4 border-bottom border-danger p-3'>Movie</th>
            <th className='pb-2 mb-4 border-bottom border-danger p-3'>Count</th>
            <th className='pb-2 mb-4 border-bottom border-danger p-3'>Price</th>
            <th className='pb-2 mb-4 border-bottom border-danger p-3'>Delete</th>
          </tr>
        </thead>

        {cart.length === 0 ? (
          <tbody>
            <h1 className='cartBody w-100 p-3'>The cart is empty</h1>
            <img
              className='cartEmptyImg'
              src='https://i.ibb.co/wBzZr7y/cart-Empty.png'
              alt='Cart Empty'
            />
            <p className='cartBody'>Please add movies in the cart</p>
          </tbody>
        ) : (
          <>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                   <td className='fs-3 text  mt-3 p-2'>
                    <img className='imgMiniature' src={item.img}/>
                   </td>
                  <td className='fs-3 text  mt-3 p-2'>{item.title}</td>
                  <td className='fs-3 text'>{item.count}</td>
                  <td className='fs-3 text'>{'$' + item.price}</td>
                  <td>
                    <button
                      className='btn btn-danger mt-3'
                      onClick={() => removeItem(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>

            <tfoot>
              <tr>
                <td colSpan='3'></td>
                <td>
                  <Link to='/buy'>
                    <button className='btn btn-success w-100 btnBuy'>
                      Buy
                    </button>
                  </Link>
                </td>
              </tr>
            </tfoot>
          </>
        )}
      </table>
    </div>
  );
}


export default MovieViewWidget;
