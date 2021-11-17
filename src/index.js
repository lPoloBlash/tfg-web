import './index.css';
import ReactDOM from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';
import App from './App';
import Movie from './views/Movie';

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="*" element={<p>Here be dragons...</p>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));