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
        }, 1000);
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
    // const [loading, setLoading] = useState(true);
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
                // setLoading(false);
            })
        }
    }, []);
    
    return (
        <>
            <Flex>
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