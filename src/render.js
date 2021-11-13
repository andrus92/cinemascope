export function renderWelcomeLetter(elem) {
    elem.innerHTML = `<h1>Hello Cinemascope!</h1>`;
}

export function renderMovies(data) {
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
            </div>`;
        fragment.append(div);
    });

    return fragment;
}