import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import App from './App';
import Movie from './views/Movie';

ReactDOM.render((
    <BrowserRouter>
        <ScrollToTop/>
        <Routes>
            <Route path="/" element={<App/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="*" element={<p>404 not found</p>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));