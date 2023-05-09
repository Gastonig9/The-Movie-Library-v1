import React, { useState, useEffect, useContext } from 'react';
import "./MovieDetail.css"
import { useParams } from 'react-router-dom';
import { getDataMovieIndividualFb } from '../../services/firestore'
import MovieCount from '../MovieCount/MovieCount';
import Flex from '../Flex/Flex';
import { cartContext } from '../../context/cartContext';
import RatingMovie from '../RatingMovie/RatingMovie';
import MovieReview from '../MovieReview/MovieReview';
import MovieComments from '../MovieComments/MovieComments';
import MovieGallery from '../MovieGallery/MovieGallery';

export default function MovieDetail() {
    const { cart, addItem } = useContext(cartContext)
    const [movie, setmovie] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        getDataMovieIndividualFb(id).then(response => {
            setmovie(response)
            setLoading(false);
        })
    }, [id]);

    function addOnCart(count) {
        addItem(movie, count)
        console.log(cart)
    }

    return (
        <>
            {loading ?
                <div className='contentLoader'>
                    <div className=" bg-dark" style={{ height: "100vh" }}>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <div className="spinner-grow text-primary loaderCard" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                        <h1 className='text-light mt-5 animate__animated animate__flash textLoader'>The Movie Library</h1>
                    </div>
                </div>
                :
                <div className="container text-center bg-dark">
                    {movie.classification === "Classification R" && (
                        <div className="w-100 alert alert-danger alert-dismissible fade show fixed-bottom position-absolute top-50 start-50 translate-middle" role="alert">
                            <h1><strong>Warning</strong></h1>
                            <img src='https://i.ibb.co/4Z30Pjm/5a81af7d9123fa7bcc9b0793.png' className='imgWarning' alt='Warning' />
                            <h4>This movie is not suitable for children under 18 years of age.
                                Contains scenes of violence, inappropriate language and explicit sexual content.
                                Please note that the R rating means that this movie is for adults and may not be suitable for all viewers.
                                If you are not sure, we recommend that you look up more information about the film before proceeding.</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )}
                    <div className="row row-cols-3 p-3">
                        <div className="col imgCol">
                            <img className='imgMovie' src={movie.img} alt={`Movie ${movie.title}`} />
                        </div>
                        <div className="col">
                            <h3 className='text-light text-decoration-underline'>{movie.title}</h3>
                            <p className='text-light'>{movie.synopsis}</p>
                            <hr className="border border-danger border-1 opacity-50" />
                            <h2 className='text-light'>Category: {movie.category}</h2>
                        </div>
                        <div className="col">
                            <h4 className='text-light'>Direct by: {movie.director}</h4>
                            <hr className="border border-danger border-1 opacity-50" />
                            <p className='text-primary'>Release year: {movie.premiere}</p>
                            <hr className="border border-danger border-1 opacity-50" />
                            <p className='text-primary'>Scriptwriters: {movie.scriptwriters}</p>
                            <hr className="border border-danger border-1 opacity-50" />
                            <p className='text-primary'>Cast: {movie.cast}</p>
                            <hr className="border border-danger border-1 opacity-50" />
                            <Flex>
                                <MovieCount onAddToCart={addOnCart} />
                            </Flex>
                        </div>
                    </div>
                    <hr className="border border-light border-3 opacity-75"></hr>
                    <MovieGallery/>
                    <hr className="border border-light border-3 opacity-75"></hr>
                    <RatingMovie />
                    <MovieReview/>
                    <hr className="border border-light border-3 opacity-75"></hr>
                    <MovieComments/>
                </div>
            }
        </>
    )
}


