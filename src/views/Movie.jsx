import './Movie.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { movies_data } from '../data/moviesDataJSON';
import HomeButton from '../components/HomeButton';
import SearchBar from '../components/SearchBar';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';

export default function Movie() {
    const [validId, setValidId] = useState(true);
    const params = useParams();

    function getMovie(movieId) {
        return movies_data.find((movie) => {
            return movie.id === movieId;
        });
    }

    const movie_info = getMovie(params.id);
    
    useEffect(() => {
        if (movie_info === undefined)
            setValidId(false);
    }, [movie_info]);

    if (!validId && movie_info === undefined)
        return <Navigate to="notfound"/>;

    return (
        <div className="movie">
            <div className="top-bar">
                <HomeButton/>
                <SearchBar/>
            </div>
            {movie_info !== undefined && <MovieInfo id={movie_info.id}/>}
            {movie_info !== undefined && <MovieList listName="Related" movieIdList={movie_info.relatedMovies}/>}
        </div>
    )
}