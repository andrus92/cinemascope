export function renderWelcomeLetter(elem) {
    elem.innerHTML = `<h1>Hello Cinemascope!</h1>`;
}

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
                <img src="${film.picture}" alt="" class="movie__img">
                <span class="movie__tittle">${film.title}</span>
                <span class="movie__rating">${film.rating}</span>
                <span class="movie__genres">${film.genres}</span>
                <span class="movie__countries">${film.countries}</span>
                <span class="movie__release">Release date: ${film.relDate}</span>
                <div class="movie__popup">
                    <h3>Description</h3>
                    <p>${film.description}</p>
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
            <span class="movie-details__rating">Rating: ${film.rating}</span>
            <span class="movie-details__genres">Genres: ${film.genres}</span>
            <span class="movie-details__countries">Countries: ${film.countries}</span>
            <span class="movie-details__release">Release date: ${film.relDate}</span>
            <span class="movie-details__director">Director: ${film.director}</span>
            <span class="movie-details__cast">Cast: ${film.cast}</span>
            <span class="movie-details__description-title">Description:</span>
            <span class="movie-details__description">${film.description}</span>
        </div>`;

    return div;
}