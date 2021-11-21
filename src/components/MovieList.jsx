import './MovieList.css';
import header from '../data/urlHeader';
import { Link } from 'react-router-dom';

export default function MovieList(props) {

    async function loadMovieData(movie) {
        try {
            const response = await fetch("https://api.themoviedb.org/3/movie/" + movie.id + "?api_key=7d00d849e6faf0e552458a8ec8230945");
    
            if (response.status === 200) {
                let data = await response.json();
            }
            else if (response.status === 401)
                console.log('Wrong key');
            else if (response.status === 404)
                console.log('The movie you\'re looking for doesn\'t exist');
            else
                console.log('There was an error');
        } 
        
        catch(error) {
            console.log(error);
        }
    }

    return (
        <div className="movie-list">
            <div className="movie-list-header">
                <h1>{this.props.listName}</h1>
            </div>
            <div className="movie-list-content">
                {props.movieList.map((movie) => (
                    <div key={this.movie.id} className="movie-list-box">
                        <Link className="movie-list-box-link" to={`/movie/${this.movie.id}`}>
                            <img className="movie-list-box-img" src={header + this.movie.poster_path} alt={this.movie.original_title}/>
                            <div className="movie-list-box-title">
                                <b>{this.movie.original_title}</b>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}