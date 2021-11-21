import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Movie from './views/Movie';
import data from './data/data.csv';

var archivoTxt = new XMLHttpRequest();
archivoTxt.open("GET", data, false);
archivoTxt.send(null);
var txt = archivoTxt.responseText;

//var csv is the CSV file with headers
function csvJSON(csv) {

    var lines=csv.split("\n");
    var result = [];

    for(var i=1;i<lines.length-1;i++){
  
        var obj = [];
        var currentline=lines[i].split(",\"");
        obj.id = currentline[0];

        var aSimilar = currentline[1].split(", ");
        var ini = aSimilar[0];
        var fin = aSimilar[aSimilar.length-1];
        aSimilar[0] = ini.slice(1,ini.length);
        aSimilar[aSimilar.length-1] = fin.slice(0,-2);
        
        obj.relatedMovies = aSimilar;

        var currentTitle = currentline[2].split(",");
        obj.title = currentTitle[currentTitle.length-1].slice(0,-1);

        result.push(obj);
  
    }
 
    //return result; //JavaScript object
    return result; //JSON
}

const movies = csvJSON(txt);

const loadData = async() => {
    try{
        const respuesta = await fetch("https://api.themoviedb.org/3/movie/550?api_key=7d00d849e6faf0e552458a8ec8230945");
        if (respuesta.status === 200) {
            const datos = await respuesta.json();
            console.log(datos.results);
            console.log(datos.results.poster_path);
        } else if (respuesta.status === 401) {
            console.log('Pusiste la llave mal.');
        } else if (respuesta.status === 404) {
            console.log('La pelicula que buscas no existe.');
        } else {
            console.log('Hubo un error.');
        }
    } catch(error) {
        console.log(error);
    }
};

loadData();

ReactDOM.render((
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App movies={movies}/>}/>
            <Route path="/movie/:id" element={<Movie/>}/>
            <Route path="*" element={<p>Here be dragons...</p>}/>
        </Routes>
    </BrowserRouter>
), document.getElementById('root'));