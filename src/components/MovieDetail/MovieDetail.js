import React, { useState, useEffect } from 'react';
// import CardMovie from '../CardMovie/CardMovie';
// import Flex from '../Flex/Flex';
import "./MovieDetail.css"
import { useParams } from 'react-router-dom';

import dataMovieBase from "../../json/dataMovieBase.json"


function getDataMovie(idURL) {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            const requestMovie = dataMovieBase.find(movie => {
                return movie.id === Number(idURL)
            })
            resolve(requestMovie)
        }, 2500);
    })
    return promise;
}
export default function MovieDetail() {
    const [movie, setmovie] = useState([]);
    const { id } = useParams();
    console.log(id)

    useEffect(() => {
        getDataMovie(id).then(response => {
            console.log("This is the info", response)
            setmovie(response)
            // setLoading(false);
        })
    }, []);
    return (
        <>
            <div class="container text-center bg-dark">
                <div class="row row-cols-3 p-3">
                    <div class="col imgCol">
                        <img className='imgMovie' src={movie.img} alt={`Movie ${movie.title}`}/>
                    </div>
                    <div class="col">
                        <h3 className='text-light text-decoration-underline'>{movie.title}</h3>
                        <p className='text-light'>{movie.synopsis}</p>
                    </div>
                    <div class="col">
                        <h4 className='text-light'>Direct by: {movie.director}</h4>
                        <hr class="border border-danger border-1 opacity-50"/>
                        <p className='text-primary'>Release year: {movie.premiere}</p>
                        <hr class="border border-danger border-1 opacity-50"/>
                        <p className='text-primary'>Scriptwriters: {movie.scriptwriters}</p>
                        <hr class="border border-danger border-1 opacity-50"/>
                        <p className='text-primary'>Cast: {movie.cast}</p>
                        <hr class="border border-danger border-1 opacity-50"/>
                    </div>
                    <div class="col">
                        <h5 className='text-light'>Valoration: {movie.rating}</h5>
                        <h5>{movie.valoration}</h5>
                    </div>
                </div>
            </div>
        </>
    )
}