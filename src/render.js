import { clampText } from './utils';

export function renderMovies(data) {
  const wrap = document.createElement('div');
  wrap.setAttribute('class', 'movie__wrap');
  wrap.setAttribute('id', 'movie__wrap');

  let fragment = new DocumentFragment();

  data.forEach((film, idx) => {
    let div = document.createElement('div');
    div.classList.add('movie__box');

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
                  <p>${clampText(film.overview, 120)}</p>
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
  let div = document.createElement('div');
  div.setAttribute('class', 'movie-details__wrap');

  div.innerHTML = 
        `<div class="movie-details__poster">
            <img class="movie-details__img" src="${film.picture}" alt="">
        </div>
        <div class="movie-details__info">
            <span class="movie-details__title">${film.title}</span>
            <span class="movie-details__genres">${film.original_title} [${film.original_language.toUpperCase()}]</span>
            
            <div class="flex-row">
              <span class="movie-details__rating">${film.vote_average}</span>
              <span class="movie-details__popularity">${film.popularity}</span>
              <span class="movie-details__vote-count">${film.vote_count}</span>
            </div>

            <span class="movie-details__release">Release date: ${film.release_date}</span>
            <span class="movie-details__description-title">Description:</span>
            <span class="movie-details__description">${film.overview}</span>
        </div>
        <div class="supers" style="
          background-image: url(${film.picture});
        "></div>
       `;

  return div;
}

