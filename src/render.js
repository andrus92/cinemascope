import { IMG_URL } from "./tmdbApi";

export function renderMovies(data) {
    const wrap = document.createElement("div");
    wrap.setAttribute('class', 'movie__wrap');
    wrap.setAttribute('id', 'movie__wrap');

    let fragment = new DocumentFragment();

    data.forEach((film, idx) => {
        let div = document.createElement("div");
        div.classList.add("movie__box");

        div.innerHTML =
            `<div class="movie__card" id="${idx}">
                <div class="movie__image-container">
                    <img src="${film.picture}" alt="" class="movie__img">
                    
                </div>

                <div class="movie__rating">${film.vote_average}</div>

                <div class="movie__container-description">
                    <span class="movie__title">${film.title}</span>
                    <span class="movie__release">${film.release_date}</span>
                </div>

		<div class="movie__popup">
                    <h3>Description</h3>
                    <p>${film.overview}</p>
                </div>
            </div>`;
        fragment.append(div);
    });

    wrap.append(fragment);

    return wrap;
}

export function clearMovies(movies_node) {
    movies_node.remove();
}

export function renderMovieDetails(film) {
    let div = document.createElement("div");
    div.setAttribute('class', 'movie-details__wrap');

    div.innerHTML = 
        `<div class="movie-details__poster">
            <img class="movie-details__img" src="${film.picture}" alt="">
        </div>
        <div class="movie-details__info">
            <span class="movie-details__title">${film.title}</span>
            <span class="movie-details__rating">Rating: ${film.vote_average}</span>
            <span class="movie-details__genres">Original title: ${film.original_title}</span>
            <span class="movie-details__countries">Original language: ${film.original_language}</span>
            <span class="movie-details__release">Release date: ${film.release_date}</span>
            <span class="movie-details__popularity">Popularity: ${film.popularity}</span>
            <span class="movie-details__vote-count">Vote count: ${film.vote_count}</span>
            <span class="movie-details__description-title">Description:</span>
            <span class="movie-details__description">${film.overview}</span>
        </div>`;

    return div;
}

const humanizeGenres = (genres) => genres.reduce((str, g, idx, len) => `${g}${idx<len.length-1 ? '' : ', '}${str}`, '')

const renderStar = (id)=>{
    return ({
        html() {
            //renderStart
            return '<span></'

        }
    })
}
