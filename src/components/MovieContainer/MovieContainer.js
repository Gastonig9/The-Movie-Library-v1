import React, { useState, useEffect } from 'react';
import "./MovieContainer.css"
import CardMovie from '../CardMovie/CardMovie';
import Flex from '../Flex/Flex';

import dataMovieBase from "../../json/dataMovieBase.json"

function getDataMovie() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(dataMovieBase)
        }, 1000);
    })
    return promise;
}

export default function MovieContainer() {
    const [movie, setmovie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getDataMovie().then(dataMovie => {
            console.log("This is the info", dataMovie)
            setmovie(dataMovie)
            setLoading(false);
        })
    }, []);

    return (
        <>
            {loading ?
                <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
                    <div className="spinner-border text-light loaderCard" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
                :
                <Flex>
                    <h1 className='bg-warning text-dark w-75 p-3 titlePrincipal'>All Movies</h1>
                    {movie.map((element) => {
                        return <CardMovie
                            key = {element.id}
                            id = {element.id}
                            img={element.img}
                            title={element.title}
                            description={element.description}
                            classificationMovie={element.classification} />
                    })}
                </Flex>
            }
        </>
    )
}

