import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies_data from './data/moviesDataJSON';

export default function App() {  

    let id_list = movies_data.map((movie) => {
        return movie.id;
    });

    return (
        <div className="app">
            <SearchBar/>
            <MovieList listName="Explore" movieList={id_list}/>
        </div>
    )
}