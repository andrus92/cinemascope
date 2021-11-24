const API_KEY = process.env.API_KEY; 

const BASE_URL = 'https://api.themoviedb.org/3';

const API_URL = `${BASE_URL}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=20${API_KEY}`;

export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const requestData = () => new Promise((resolve, reject) => {
    fetch(API_URL)
      .then(result => result.json().then(resolve))
      .catch(error => {
        console.log(error);
        return reject(`cant receive data, ${error.message}`);
      });
  });
