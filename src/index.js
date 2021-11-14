import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';
import { getMovieWrap, getMovieContainerDiv, getMovieDetailsContainerDiv } from './accessors';
import { renderMovies, renderMovieDetails, clearMovies } from './render';


function init() {

    const renderedMovies = renderMovies(moviesData);
    const movieContainerDiv = getMovieContainerDiv();
    movieContainerDiv.append(renderedMovies);


    const movieWrap = getMovieWrap();
    movieContainerDiv.addEventListener('click', (evt) => {
        let className = evt.target.getAttribute('class');
        if (className === 'movie__card') {
            const movie_id = evt.target.getAttribute('id');
            const movieDetailsContainer = getMovieDetailsContainerDiv();
            const renderedDetails = renderMovieDetails(moviesData[movie_id]);
            movieDetailsContainer.append(renderedDetails);
        }
        clearMovies(movieWrap);
    }, false);
}

init();