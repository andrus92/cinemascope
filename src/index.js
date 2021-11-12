import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';


function getRoot() {
    return document.getElementById("root");
}

function getMovieWrap() {
    return document.getElementById("movie__wrap");
}

function renderWelcomeLetter() {
    getRoot().innerHTML = `<h1>Hello Cinemascope!</h1>`;
}

function renderMovies() {
    let fragment = new DocumentFragment();


    

    moviesData.forEach(film => {
        let div = document.createElement("div");
        div.classList.add("movie__box");

        div.innerHTML =
            `<div class="movie__card">
                <img src="${film.picture}" alt="" class="movie__img">
                <span class="movie__tittle">${film.title}</span>
                <span class="movie__rating">${film.rating}</span>
                <span class="movie__genres">${film.genres}</span>
                <span class="movie__countries">${film.countries}</span>
                <span class="movie__release">Release date: ${film.relDate}</span>
            </div>`;
        fragment.append(div);
    });

    return fragment;
}

function init() {
    renderWelcomeLetter();
    console.log(moviesData);

    const renderedMovies = renderMovies();
    const movieWrap = getMovieWrap();
    movieWrap.append(renderedMovies);
}

init();