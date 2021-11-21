import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies_data from './data/moviesDataJSON';

export default function App() {  
    return (
        <div className="app">
            <SearchBar/>
            <MovieList listName="Explore" movieList={movies_data}/>
        </div>
    )
}