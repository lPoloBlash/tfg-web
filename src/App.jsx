import './App.css';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { movies_data } from './data/moviesDataJSON';
import TopBar from './components/TopBar';
import MovieList from './components/MovieList';
import { RiArrowLeftLine, RiArrowRightLine } from 'react-icons/ri';

export default function App() {  
    const [validPage, setValidPage] = useState(true);
    const [disablePrev, setDisablePrev] = useState(false);
    const [disableNext, setDisableNext] = useState(false);
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

    const maxPag = getMaxPag(movies_data.length);
    
    useEffect(() => {
        if ((params.p !== undefined && !Number.isInteger(parseInt(params.p))) || (parseInt(params.p) <= 0 || parseInt(params.p) > maxPag))
            setValidPage(false);

        if (params.p === undefined || parseInt(params.p) === 1)
            setDisablePrev(true);
        else
            setDisablePrev(false);

        if ((params.p === undefined && maxPag === 1) || parseInt(params.p) === maxPag)
            setDisableNext(true);
        else
            setDisableNext(false);
    }, [params.p, maxPag]);

    if (!validPage && ((params.p !== undefined && !Number.isInteger(parseInt(params.p))) || (parseInt(params.p) <= 0 || parseInt(params.p) > maxPag)))
        navigate("notfound");
    else if (disablePrev && parseInt(params.p) === 1)
        navigate("/");

    let movie_id_list = movies_data.map((movie) => {
        return movie.id;
    });

    function handleClickPrevious() {
        if (parseInt(params.p) === 2)
            navigate("/");
        else {
            navigate(`/page/${parseInt(params.p) - 1}`);
        }
    }

    function handleClickNext() {
        if (params.p === undefined)
            navigate("/page/2");
        else
            navigate(`/page/${parseInt(params.p) + 1}`);
    }

    return (
        <div className="app">
            <TopBar/>
            {disablePrev ? (<MovieList listName="Explore" movieIdList={movie_id_list.slice(0, movXPag)}/>)
                         : (<MovieList listName="Explore" movieIdList={movie_id_list.slice((params.p - 1) * movXPag, params.p * movXPag)}/>)}
            <div className="page-buttons">
                <button 
                    className="page-previous-button"
                    style={{fontSize: "20px"}}
                    type="button"
                    disabled={disablePrev}
                    onClick={() => handleClickPrevious()}
                >
                    <RiArrowLeftLine className="page-previous-button-icon"/>
                </button>
                {disablePrev ? (<div>1</div>)
                             : (<div>{params.p}</div>)}
                <button 
                    className="page-next-button"
                    style={{fontSize: "20px"}}
                    type="button"
                    disabled={disableNext}
                    onClick={() => handleClickNext()}
                >
                    <RiArrowRightLine className="page-next-button-icon"/>
                </button>
            </div>
        </div>
    )
}
