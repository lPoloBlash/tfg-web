import './Movie.css';
import { useParams } from "react-router-dom";
import movies_data from '../data/moviesDataJSON';
import HomeButton from '../components/HomeButton';
import SearchBar from '../components/SearchBar';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';

export default function Movie() {
    function getMovie(movieId) {
        return movies_data.find((movie) => {
            return movie.id === movieId;
        });
    }

    let params = useParams();
    let movie_info = getMovie(params.id);

    return (
        <div className="movie">
            <div className="top-bar">
                <HomeButton/>
                <SearchBar/>
            </div>
            <MovieInfo id={movie_info.id}/>
            <MovieList listName="Related" movieIdList={movie_info.relatedMovies}/>
        </div>
    )
}