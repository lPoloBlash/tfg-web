import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import SearchResults from './views/SearchResults';
import Movie from './views/Movie';
import NotFound from './views/NotFound';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/page/:p" element={<App/>}/>
            <Route path="/search/:query" element={<SearchResults/>}/>
            <Route path="/search/:query/page/:p" element={<SearchResults/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));