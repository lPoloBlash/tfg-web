import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

export default function App() {
    return (
        <div className="app">
            <SearchBar/>
            <MovieList listName="Explore"/>
        </div>
    )
}