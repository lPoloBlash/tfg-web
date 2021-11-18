import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies from './data/moviesdata';

export default function App() {
    return (
        <div className="app">
            <SearchBar/>
            <MovieList listName="Explore" movieList={movies}/>
        </div>
    )
}