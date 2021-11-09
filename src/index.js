import "./styles/normalize.css";
import "./styles/styles.css";
import { sortArrayByName } from './utils';
import { moviesData } from './movies';

import img0 from '../img/Shawshank_redemption_movie.jpg';
import img1 from '../img/Godfather.jpg';
import img2 from '../img/vita.jfif';
import img4 from '../img/forest.jfif';
import img5 from '../img/1plus1.jfif';
import img6 from '../img/pulp_fiction.jfif';
import img7 from '../img/a_beautiful_mind.jfif';
import img8 from '../img/catch_me.jfif';
import img9 from '../img/pirates.jfif';
import img10 from '../img/scent_of_a_woman.jfif';
import img11 from '../img/wonderful_life.jfif';
import img12 from '../img/il_bisbetico_domato.jfif';
import img13 from '../img/innamorato.jfif';
import img14 from '../img/roman_holiday.jfif';
import img15 from '../img/breakfast.jfif';
import img16 from '../img/dial_m.jfif';
import img17 from '../img/rear_window.jfif';
import img18 from '../img/vertigo.jfif';

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

        const filmImg = require(film.picture);
        div.innerHTML =
            `<div class="movie__card">
                <img src="${filmImg}" alt="" class="movie__img">
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