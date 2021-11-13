import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';
import { getRoot, getMovieWrap } from './accessors';
import { renderWelcomeLetter, renderMovies } from './render';


function init() {
    const root = getRoot();
    renderWelcomeLetter(root);
    console.log(moviesData);

    const renderedMovies = renderMovies(moviesData);
    const movieWrap = getMovieWrap();
    movieWrap.append(renderedMovies);
}

init();