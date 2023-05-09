import "./MovieGallery.css"
import { getDataMovieFb } from '../../services/firestore'
import { useEffect, useState } from 'react';
import { Link} from "react-router-dom";

export default function MovieGallery(props) {
    const [movie, setmovie] = useState([]);
    const [movie2, setmovie2] = useState([])

    useEffect(() => {
        getDataMovieFb().then(dataMovie => {
            console.log(dataMovie)
            const randomMovies = []
            const randomMovies2 = []
            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * dataMovie.length)
                const randomMovie = dataMovie[randomIndex]
                randomMovies.push(randomMovie)
            }

            for (let i = 0; i < 3; i++) {
                const randomIndex = Math.floor(Math.random() * dataMovie.length)
                const randomMovie = dataMovie[randomIndex]
                randomMovies2.push(randomMovie)
            }

            setmovie(randomMovies)
            setmovie2(randomMovies2)
        })
    }, []);
    return (
        <>
            <div>
                <h1 className="text-light p-3 w-50 mx-auto rounded-pill border border-light" style={{ fontFamily: "Bruno Ace SC, cursive" }}>Other recommendations</h1>
            </div>

            <div id="carouselExampleControls" className="carousel slide mx-auto" data-bs-ride="carousel">
                <div className="carousel-inner w-100 d-flex justify-center">
                    <div className="carousel-item active">
                        <div className="imgContain">
                            <div>
                                {movie[0]?.title ? <h5 className="text-light">{movie[0].title}</h5> : null}
                                <Link to={`/detalle/${movie[0]?.id}`}>
                                    {movie[0]?.img ? <img src={movie[0].img} className="img-thumbnail" alt={movie[0].title} /> : null}
                                </Link>
                            </div>

                            <div>
                                {movie[1]?.title ? <h5 className="text-light">{movie[1].title}</h5> : null}
                                <Link to={`/detalle/${movie[1]?.id}`}>
                                    {movie[1]?.img ? <img src={movie[1].img} className="img-thumbnail" alt={movie[1].title} /> : null}
                                </Link>
                            </div>

                            <div>
                                {movie[2]?.title ? <h5 className="text-light">{movie[2].title}</h5> : null}
                                <Link to={`/detalle/${movie[2]?.id}`}>
                                    {movie[2]?.img ? <img src={movie[2].img} className="img-thumbnail" alt={movie[2].title} /> : null}
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="carousel-item">
                        <div className="imgContain">
                            <div>
                                {movie2[0]?.title ? <h5 className="text-light">{movie2[0].title}</h5> : null}
                                <Link to={`/detalle/${movie2[0]?.id}`}>
                                    {movie2[0]?.img ? <img src={movie2[0].img} className="img-thumbnail" alt={movie2[0].title} /> : null}
                                </Link>
                            </div>

                            <div>
                                {movie2[1]?.title ? <h5 className="text-light">{movie2[1].title}</h5> : null}
                                <Link to={`/detalle/${movie2[1]?.id}`}>
                                    {movie2[1]?.img ? <img src={movie2[1].img} className="img-thumbnail" alt={movie2[1].title} /> : null}
                                </Link>
                            </div>

                            <div>
                                {movie2[2]?.title ? <h5 className="text-light">{movie2[2].title}</h5> : null}
                                <Link to={`/detalle/${movie2[2]?.id}`}>
                                    {movie2[2]?.img ? <img src={movie2[2].img} className="img-thumbnail" alt={movie2[2].title} /> : null}
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )

}

// {movie[0]?.img ? <img src={movie[0].img} className="card-img-top" alt={movie[0].title} /> : null}
// href={`/detalle/${id}`}