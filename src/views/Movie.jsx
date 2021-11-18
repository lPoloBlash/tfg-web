import './Movie.css';
import { useParams } from "react-router-dom";
import movies from '../data/moviesdata';
import HomeButton from '../components/HomeButton';
import SearchBar from '../components/SearchBar';
import MovieInfo from '../components/MovieInfo';
import MovieList from '../components/MovieList';

function GetMovie(movieId) {
    return movies.find((movie) => {
        return movie.id === movieId;
    });
}

export default function Movie() {
    let params = useParams();
    let movie_info = GetMovie(params.id);
    
    return (
        <div className="movie">
            <HomeButton/>
            <SearchBar/>
            <MovieInfo info={movie_info}/>
            <MovieList listName="Related"/>
        </div>
    )
}