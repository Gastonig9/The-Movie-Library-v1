import React, { useState, useEffect, useContext } from 'react';
import "./MovieContainer.css"
import CardMovie from '../CardMovie/CardMovie';
import Flex from '../Flex/Flex';
import { cartContext } from '../../context/cartContext';
import { getDataMovieFb } from '../../services/firestore'
import SearchBar from '../SearchBar/SearchBar';

export default function MovieContainer() {
    const [movie, setmovie] = useState([]);
    const [loading, setLoading] = useState(false);
    const { searchResults } = useContext(cartContext)

    useEffect(() => {
        setLoading(true);
        if (searchResults.length) {
          setmovie(searchResults);
          setLoading(false);
        } else {
          getDataMovieFb().then((dataMovie) => {
            setmovie(dataMovie);
            setLoading(false);
          });
        }
      }, [searchResults]);
      
      useEffect(() => {
        setLoading(true);
        getDataMovieFb().then((dataMovie) => {
          setmovie(dataMovie);
          setLoading(false);
        });
      }, []);
      

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
                <Flex>
                    <h1 className='bg-warning text-dark w-50 p-3 titlePrincipal'>All Movies</h1>
                    <SearchBar />
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
            }
        </>
    )
}

