import './Movie.css';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './components/searchBar';
import { Box } from '@mui/system';

const header = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const movie_info = {
    id: uuidv4,
    title: 'Scary Movie',
    url: "fHWR3YplPQWciYzxEity2kyDoDn.jpg", 
    plot: "¿No te gusta comprar entradas online? ",
    director: "Tomás Turbado",
    releaseDate: "01/01/3000",
    genre: "Comedy",
    relatedMovies: [
        { id: uuidv4(), title: 'Scary Movie', url: "fHWR3YplPQWciYzxEity2kyDoDn.jpg"},
        { id: uuidv4(), title: 'Scary Movie 2', url: "r4qTydYjntbb5TfZKV229NpSaCt.jpg"},
        { id: uuidv4(), title: 'Scary Movie 3', url: "7tMsPb5yEwmb4eHbXRAD6mURE5B.jpg"},
        { id: uuidv4(), title: 'Scary Movie 4', url: "iSybaw6TeJKKmHIh8UonOEsv4Bh.jpg"},
        { id: uuidv4(), title: 'Scary Movie 5', url: "mjsX6YYZEepnuJ6F04MAGGOSdbJ.jpg"},
        { id: uuidv4(), title: 'Scary Movie 6', url: "fHWR3YplPQWciYzxEity2kyDoDn.jpg"},
        { id: uuidv4(), title: 'Scary Movie 7', url: "r4qTydYjntbb5TfZKV229NpSaCt.jpg"},
        { id: uuidv4(), title: 'Scary Movie 8', url: "7tMsPb5yEwmb4eHbXRAD6mURE5B.jpg"},
        { id: uuidv4(), title: 'Scary Movie 9', url: "iSybaw6TeJKKmHIh8UonOEsv4Bh.jpg"},
        { id: uuidv4(), title: 'Scary Movie 10', url: "mjsX6YYZEepnuJ6F04MAGGOSdbJ.jpg"}
    ]
};

export default function Movie() {
    return (
        <div className="movie">
            <SearchBar/>
            <div className="movie-info">
                <img className="movie-info-img" src={header + movie_info.url} alt={movie_info.title}/>
                <div className="movie-info-box">
                    <div className="movie-info-header"><h1>{movie_info.title}</h1></div>
                    <div className="movie-info-content">
                        <div className="movie-info-director">
                            <h2>Director</h2>
                            <div>{movie_info.director}</div>
                        </div>
                        <div className="movie-info-releaseDate">
                            <h2>Release Date</h2>
                            <div>{movie_info.releaseDate}</div>
                        </div>
                        <div className="movie-info-genre">
                            <h2>Genre</h2>
                            <div>{movie_info.genre}</div>
                        </div>
                        <div className="movie-info-plot">
                            <h2>Plot</h2>
                            <div>{movie_info.plot}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="related">
                <div><h1 className="related-header">Related</h1></div>
                <div className="related-content">
                    {movie_info.relatedMovies.map((movie, index) => (
                        <Box key={index} className="related-movie-box">
                            <div>
                                <img className="related-movie-img" src={header + movie.url} alt={movie.title}/>
                                <div className="related-movie-title"><b>{movie.title}</b></div>
                            </div>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    )
}