import './App.css';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';
import movies_data from './data/moviesDataJSON';

export default function App() {  

    const movXPag = 50;
    let pag = 1; // Change page to see other movies

    let movie_id_list = movies_data.map((movie) => {
        return movie.id;
    });

    return (
        <div className="app">
            <SearchBar/>
            <MovieList listName="Explore" movieIdList={movie_id_list.slice((pag - 1) * movXPag, pag * movXPag)}/>
        </div>
    )
}
