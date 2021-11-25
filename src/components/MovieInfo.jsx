import './MovieInfo.css';
import { useState, useEffect } from 'react';
import header from '../data/urlHeader';
import ImgNotAvailable from '../assets/Image-Not-Available.png';

export default function MovieInfo(props) {
    const [movie, setMovie] = useState({});
    const [genres, setGenres] = useState("");

    useEffect(() => {
        try {
            fetch(`https://api.themoviedb.org/3/movie/${props.id}?api_key=7d00d849e6faf0e552458a8ec8230945`)
            .then((response) => response.json())
            .then((data) => {
                setMovie(data);
                let genres = '';
                genres += data.genres.map((genre) => ' ' + genre.name);
                setGenres(genres);
            });
        }
        catch(error) {
            console.log(error);
        }
    }, [props.id]);

    return (
        <div className="movie-info">
            {movie.poster_path ? (<img className="movie-info-img" src={header + movie.poster_path} alt={movie.original_title}/>)
                               : (<img className="movie-info-img" src={ImgNotAvailable} alt="not available"/>)}
            <div className="movie-info-box">
                <div className="movie-info-header"><h1>{movie.original_title}</h1></div>
                <div className="movie-info-content">
                    <div className="movie-info-releaseDate">
                        <h2>Release Date</h2>
                        <div>{movie.release_date}</div>
                    </div>
                    <div className="movie-info-genre">
                        <h2>Genre</h2>
                        <div>{genres}</div>                        
                    </div>
                    <div className="movie-info-runtime">
                        <h2>Runtime</h2>
                        <div>{Math.trunc(movie.runtime / 60) + "h " + movie.runtime % 60 + "m"}</div>
                    </div>
                    <div className="movie-info-overview">
                        <h2>Overview</h2>
                        <div>{movie.overview}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
