import { useEffect, useState } from "react";
import "./MovieCategories.css"
import Flex from '../Flex/Flex';
import CardMovie from '../CardMovie/CardMovie';
import { useParams } from 'react-router-dom';

import dataMovieBase from "../../json/dataMovieBase.json"

function getDataMovie() {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(dataMovieBase)
        }, 200);
    })
    return promise;
}

function getDataMovieCategory(category) {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            const filteredMovies = dataMovieBase.filter(movie => {
                return movie.category === category;
            });
            resolve(filteredMovies);
        }, 1000);
    });
    return promise;
}

export default function MovieCategories() {
    const [movie, setmovie] = useState([]);
    const { categorymovie } = useParams();
    console.log(categorymovie)

    useEffect(() => {
        if (categorymovie === undefined) {
            getDataMovie().then(dataMovie => {
                console.log("This is the info", dataMovie)
                setmovie(dataMovie)
            })
        } else {
            getDataMovieCategory(categorymovie).then(response => {
                console.log("This is the info", response)
                setmovie(response)
            })
        }
    }, [categorymovie]);

    if (movie.length === 0) {
        return (
            <div className="d-flex justify-content-center align-items-center bg-dark" style={{ height: "100vh" }}>
                <div className="spinner-border text-light loaderCard" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }

    return (
        <>
            <Flex>
                <h1 className='bg-warning text-dark w-75 p-3 titlePrincipal animate__animated animate__fadeIn'>{categorymovie}</h1>
                {movie.map((element) => {
                    return <CardMovie
                        key={element.id}
                        id={element.id}
                        img={element.img}
                        title={element.title}
                        description={element.description} />
                })}
                
            </Flex>
        </>
    )
}
