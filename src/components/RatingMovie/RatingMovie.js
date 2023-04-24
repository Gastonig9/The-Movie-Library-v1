import React, { useState, useContext, useEffect } from "react";
import { cartContext } from '../../context/cartContext';
import { getDataMovieIndividualFb } from '../../services/firestore'
import "./RatingMovie.css";
import { useParams } from "react-router-dom";

const RatingComponent = () => {
    const [movie, setMovie] = useState([]);
    const [rating, setRating] = useState(0);
    const { saveRating } = useContext(cartContext);
    const { id } = useParams();
  
    useEffect(() => {
      getDataMovieIndividualFb(id).then((response) => {
        setMovie(response);
      });
    }, [id]);
  
    const handleRating = (value) => {
      setRating(value);
      saveRating(value);
  
      const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
      const movieIndex = storedRatings.findIndex((m) => m.id === id);
  
      if (movieIndex === -1) {
        // La película aún no tiene calificaciones almacenadas
        storedRatings.push({ id, ratings: [value] });
      } else {
        // La película ya tiene calificaciones almacenadas
        storedRatings[movieIndex].ratings.push(value);
      }
  
      localStorage.setItem("ratings", JSON.stringify(storedRatings));
      setMovie((prevMovie) => {
        const currentRating = prevMovie.currentRating || [];
        const newCurrentRating = [...currentRating, value];
        const newMovie = { ...prevMovie, currentRating: newCurrentRating };
        return newMovie;
      });
    };
  
    const calculateRating = () => {
      const storedRatings = JSON.parse(localStorage.getItem("ratings")) || [];
      const movieRatings = storedRatings.find((m) => m.id === id)?.ratings || [];
      const sum = movieRatings.reduce((total, rating) => total + rating, 0);
      const average = sum / movieRatings.length || 0;
      return average.toFixed(1);
    };
  
    return (
      <div className="rating-component">
        <h1 className="text-light">Rate this movie</h1>
        <div className="star-container mx-auto">
          {[...Array(10)].map((star, i) => {
            const ratingValue = i + 1;
            return (
              <label key={id}>
                <input
                  className="inputRadio"
                  type="radio"
                  name="rating"
                  value={ratingValue}
                  onClick={() => handleRating(ratingValue)}
                />
              </label>
            );
          })}
        </div>
        <h1 className="text-light">{calculateRating()}</h1>
      </div>
    );
  };
  
  export default RatingComponent;
  

// const handleRating = (value) => {
//     setRating(value);
//     saveRating(value)
//     setMovie(prevMovie => {
//         const currentRating = prevMovie.currentRating || [];
//         const newCurrentRating = [...currentRating, value];
//         const newMovie = { ...prevMovie, currentRating: newCurrentRating };
//         console.log(newMovie);
//         return newMovie;
//       });   
// };


// const calculateRating = () => {
//     const currentRating = movie.currentRating || [];
//     const sum = currentRating.reduce((total, rating) => total + rating, 0);
//     const average = sum / currentRating.length || 0;
//     return average.toFixed(1);
// };


// const handleRating = (value) => {
//     setRating(value);
//     saveRating(value)
//     setMovie(prevMovie => {
//         const currentRating = prevMovie.currentRating || [];
//         const newCurrentRating = [...currentRating, value];
//         const newMovie = { ...prevMovie, currentRating: newCurrentRating };
//         console.log(newMovie);
//         const setLocalStorage = localStorage.setItem("rating", JSON.stringify(newMovie.currentRating || []));
//         return newMovie;
//       });
// };


// const calculateRating = () => {
//     const getLocalStorage = JSON.parse(localStorage.getItem("rating"))
//     const sum = getLocalStorage.reduce((total, rating) => total + rating, 0);
//     const average = sum / getLocalStorage.length || 0;
//     return average.toFixed(1);
// };