import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Navigate, useNavigate } from 'react-router-dom';
import { movies_data, numMovies } from './data/moviesDataJSON';
import SearchBar from './components/SearchBar';
import MovieList from './components/MovieList';

export default function App() {  
    const [validPage, setValidPage] = useState(true);
    const movXPag = 50;
    const params = useParams();
    const navigate = useNavigate();
    
    function getMaxPag(n) {
        if (n % movXPag === 0)
            return Math.trunc(n / movXPag);
        else {
            if (Math.trunc(n / movXPag) === 0)
                return 1;
            else
                return (Math.trunc(n / movXPag) + 1);
        }
    }

    const maxPag = getMaxPag(numMovies);

    useEffect(() => {
        if ((params.p !== undefined && !Number.isInteger(parseInt(params.p))) || (parseInt(params.p) <= 1 || parseInt(params.p) > maxPag))
            setValidPage(false);
    }, [params.p, maxPag]);

    if (!validPage && parseInt(params.p) === 1)
        return <Navigate to="/"/>;
    else if (!validPage && ((params.p !== undefined && !Number.isInteger(parseInt(params.p))) || (parseInt(params.p) < 1 || parseInt(params.p) >= maxPag)))
        return <Navigate to="notfound"/>;

    let movie_id_list = movies_data.map((movie) => {
        return movie.id;
    });

    function handleClickPrevious() {
        if (parseInt(params.p) === 2)
            navigate("/");
        else
            navigate(`/page/${parseInt(params.p) - 1}`);
    }

    function handleClickNext() {
        if (params.p === undefined)
            navigate("/page/2");
        else
            navigate(`/page/${parseInt(params.p) + 1}`);
    }

    return (
        <div className="app">
            <SearchBar/>
            {params.p !== undefined ? (<MovieList listName="Explore" movieIdList={movie_id_list.slice((params.p - 1) * movXPag, params.p * movXPag)}/>)
                                    : (<MovieList listName="Explore" movieIdList={movie_id_list.slice(0, movXPag)}/>)}
            {params.p !== undefined && <button 
                className="previous-button"
                style={{fontSize: "20px"}}
                type="button"
                onClick={() => handleClickPrevious()}
            >
                Previous
            </button>}
            {(params.p === undefined || parseInt(params.p) < maxPag) && <button 
                className="next-button"
                style={{fontSize: "20px"}}
                type="button"
                onClick={() => handleClickNext()}
            >
                Next
            </button>}
        </div>
    )
}
