import './SearchBar.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

export default function SearchBar() {
    const [value, setValue] = useState("");
    const navigate = useNavigate();
    
    const onSubmit = (e) => {
        navigate(`/search/${value}`);
        e.preventDefault();
    };

    return (
        <form 
            className="search-bar"
            action="/"
            method="get"
            autoComplete="off"
            onSubmit={onSubmit}
        >
            <input
                className="search-bar-input"
                value={value}
                onInput={(e) => setValue(e.target.value)}
                type="text"
                placeholder="Search by title"
                name="s"
            />
            <button
                className="search-bar-button"
                type="submit"
            >
                <FaSearch className="search-bar-icon"/>
            </button>
        </form>
    );
}