const latest_mouseover_obj = {
  class : '',
  id : ''
};

// TODO: please, get rid of such a weird mouse over method
export function handlePopupOver(evt, callback) {
  const className = evt.target.getAttribute('class');

  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');

    if (latest_mouseover_obj.class !== 'movie__card'
                || (latest_mouseover_obj.class === 'movie__card' && latest_mouseover_obj.id !== movie_id)) {

      const movie_card = document.getElementById(movie_id);
      const movie_card_children = movie_card.childNodes;

      const movie_popup = [].find.call(movie_card_children, elem => (elem.className === 'movie__popup'));

      if (!movie_popup !== undefined) {
        callback(movie_popup);
      }
      latest_mouseover_obj.id = movie_id;
    } else {
      latest_mouseover_obj.id = '';
    }
  }
  latest_mouseover_obj.class = className;
}

export function getMovieWrap() {
  return document.getElementById('movie__wrap');
}

export function getMovieContainerDiv() {
  return document.getElementById('movie-container');
}

export function getMovieDetailsContainerDiv() {
  return document.getElementById('movie-details-container');
}

export function getPopup(evt) {
  const className = evt.target.getAttribute('class');
  if (className === 'movie__card') {
    const movie_id = evt.target.getAttribute('id');
    const element = document.getElementById(movie_id).lastElementChild;
    const popup = element.getAttribute('popup');
    if(popup) {
      return element;
    } 
  }
  return null;
}