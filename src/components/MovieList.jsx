import './MovieList.css';
import movies from '../data/moviesdata';
import header from '../data/urlheader';
import { Link } from 'react-router-dom';

export default function MovieList(props) {
    return (
        <div className="movie-list">
            <div className="movie-list-header">
                <h1>{props.listName}</h1>
            </div>
            <div className="movie-list-content">
                {movies.map((movie, index) => (
                    <div key={index} className="movie-list-box">
                        <div>
                            <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none', color: 'white'}}>
                                <img className="movie-list-box-img" src={header + movie.url} alt={movie.title}/>
                            </Link>
                            <div className="movie-list-box-title">
                                <Link to={`/movie/${movie.id}`} style={{textDecoration: 'none', color: 'white'}}>
                                    <b>{movie.title}</b>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
