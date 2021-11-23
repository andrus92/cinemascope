import "./styles/normalize.css";
import "./styles/styles.css";
import "./styles/styles.scss"
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
        
        if (className === 'movie__image-container') {
            const movie_id = evt.target.parentElement.getAttribute('id');
            const movieDetailsContainer = getMovieDetailsContainerDiv();
            const renderedDetails = renderMovieDetails(moviesData[movie_id]);
            movieDetailsContainer.append(renderedDetails);
            clearMovies(movieWrap);
        }

    }, false);

    const latest_mouseover_obj = {
        class: '',
        id: ''
    };

    movieContainerDiv.addEventListener('mouseover', (evt) => {
        let className = evt.target.getAttribute('class');

        if (className === 'movie__image-container') {
            const modal = document.getElementById("myModal");
            const movie_id = evt.target.parentElement.getAttribute('id');

            if (   latest_mouseover_obj.class !== "movie__card"
                || (latest_mouseover_obj.class === "movie__card" && latest_mouseover_obj.id !== movie_id)) {

                var p = document.getElementById("modal__text");
                p.innerHTML = `${moviesData[movie_id].description}`;

                modal.style.display = "block";

                setTimeout(function () {
                    modal.style.display = "none";
                }, 1500);

                latest_mouseover_obj.id = movie_id;
            } else {
                latest_mouseover_obj.id = '';
            }
        }
        latest_mouseover_obj.class = className;

    }, false);
}

init();