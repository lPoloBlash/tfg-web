import './App.css';
import { v4 as uuidv4 } from 'uuid';
import SearchBar from './components/searchBar';
import { Box } from '@mui/system';

const header = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/";

const movies = [
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
];

export default function App() {
    return (
        <div className="app">
            <SearchBar/>
            <div className="explore">
                <div><h1 className="explore-header">Explore</h1></div>
                <div className="explore-content">
                    {movies.map((movie, index) => (
                        <Box key={index} className="movie-box">
                            <div>
                                <img className="movie-img" src={header + movie.url} alt={movie.title}/>
                                <div className="movie-title"><b>{movie.title}</b></div>
                            </div>
                        </Box>
                    ))}
                </div>
            </div>
        </div>
    )
}
