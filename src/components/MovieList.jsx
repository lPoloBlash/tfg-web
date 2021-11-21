import './MovieList.css';
import header from '../data/urlheader';
import { Link } from 'react-router-dom';

export default function MovieList(props) {

    return (
        <div className="movie-list">
            <div className="movie-list-header">
                <h1>{props.listName}</h1>
            </div>
            <div className="movie-list-content">
                {props.movieList.map((movie) => (
                    <div key={movie.id} className="movie-list-box">
                        <Link className="movie-list-box-link" to={`/movie/${movie.id}`}>
                            <img className="movie-list-box-img" src={header + movie.url} alt={movie.title}/>
                            <div className="movie-list-box-title">
                                <b>{movie.title}</b>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}
