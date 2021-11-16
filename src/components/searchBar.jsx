import { FaSearch } from 'react-icons/fa';

const SearchBar = () => (
    <div className="header-search">
        <input
            className="bar"
            style={{fontSize: "20px"}}
            type="search"
            placeholder="Search by title"
        />
        <button
            className="button"
            style={{fontSize: "20px"}}
            type="button"
        >
            <FaSearch className="search-icon"/>
        </button>
    </div>
);

export default SearchBar;