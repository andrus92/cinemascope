import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';
import { getRoot, getMovieWrap, getMovieDetails, getMovieContainerDiv, getMovieDetailsContainerDiv } from './accessors';
import { renderWelcomeLetter, renderMovies, renderMovieDetails, clearMovies } from './render';


function init() {
    const root = getRoot();
    renderWelcomeLetter(root);
    console.log(moviesData);

    const renderedMovies = renderMovies(moviesData);
    const movieContainerDiv = getMovieContainerDiv();
    movieContainerDiv.append(renderedMovies);


    const movieWrap = getMovieWrap();
    movieContainerDiv.addEventListener('click', (evt) => {
        let className = evt.target.getAttribute('class');
        if (className === 'movie__card') {
            const movie_id = evt.target.getAttribute('id');
            console.log(`id=${movie_id}`);
            //const movieDetails = getMovieDetails();
            //const renderedDetails = renderMovieDetails(moviesData[movie_id]);
            //movieDetails.append(renderedDetails);
            const movieDetailsContainer = getMovieDetailsContainerDiv();
            const renderedDetails = renderMovieDetails(moviesData[movie_id]);
            movieDetailsContainer.append(renderedDetails);
        }
        clearMovies(movieWrap);
    }, false);
}

init();