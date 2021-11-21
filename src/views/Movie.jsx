import './Movie.css';
import { useParams } from "react-router-dom";
import movies from '../data/moviesdata';
import HomeButton from '../components/HomeButton';
import SearchBar from '../components/SearchBar';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';

export default function Movie() {
    function getMovie(movieId) {
        return movies.find((movie) => {
            return movie.id === movieId;
        });
    }

    function getRelatedMovies(relatedIdMovies) {
        let relatedMovies = (relatedIdMovies.map((movieId) => {
            return getMovie(movieId);
        }));

        return relatedMovies;
    }

    let params = useParams();
    let movie_info = getMovie(params.id);
    let related_movies = getRelatedMovies(movie_info.relatedMovies);

    return (
        <div className="movie">
            <div className="top-bar">
                <HomeButton/>
                <SearchBar/>
            </div>
            <MovieInfo info={movie_info}/>
            <MovieList listName="Related" movieList={related_movies}/>
        </div>
    )
}