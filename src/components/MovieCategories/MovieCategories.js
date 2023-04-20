import { useEffect, useState } from "react";
import "./MovieCategories.css"
import Flex from '../Flex/Flex';
import CardMovie from '../CardMovie/CardMovie';
import { useParams } from 'react-router-dom';
import { getDataMovieFb, getDataMovieCategoryFb } from '../../services/firestore'

export default function MovieCategories() {
    const [movie, setmovie] = useState([]);
    const { categorymovie } = useParams();
    console.log(categorymovie)

    useEffect(() => {
        if (categorymovie === undefined) {
            getDataMovieFb().then(dataMovie => {
                console.log("This is the info", dataMovie)
                setmovie(dataMovie)
            })
        } else {
            getDataMovieCategoryFb(categorymovie).then(response => {
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
                        description={element.description}
                        classificationMovie={element.classification} />
                })}
                
            </Flex>
        </>
    )
}
