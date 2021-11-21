import './SearchBar.css';
import { FaSearch } from 'react-icons/fa';


const SearchBar = () => (
    <div className="search-bar">
        <input
            className="search-bar-input"
            style={{fontSize: "20px"}}
            type="search"
            placeholder="Search by title"
        />
        <button
            className="search-bar-button"
            style={{fontSize: "20px"}}
            type="button"
        >
            <FaSearch className="search-bar-icon"/>
        </button>
    </div>
);

export default SearchBar;