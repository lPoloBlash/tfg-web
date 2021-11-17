import './MovieInfo.css';
import header from '../data/urlheader';

export default function MovieInfo(props) {
    return (
        <div className="movie-info">
            <img className="movie-info-img" src={header + props.info.url} alt={props.info.title}/>
            <div className="movie-info-box">
                <div className="movie-info-header"><h1>{props.info.title}</h1></div>
                <div className="movie-info-content">
                    <div className="movie-info-director">
                        <h2>Director</h2>
                        <div>{props.info.director}</div>
                    </div>
                    <div className="movie-info-releaseDate">
                        <h2>Release Date</h2>
                        <div>{props.info.releaseDate}</div>
                    </div>
                    <div className="movie-info-genre">
                        <h2>Genre</h2>
                        <div>{props.info.genre}</div>
                    </div>
                    <div className="movie-info-plot">
                        <h2>Plot</h2>
                        <div>{props.info.plot}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
