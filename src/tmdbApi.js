export const IMG_URL = 'https://image.tmdb.org/t/p/w500';

export const requestData = () => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-undef
  const api_key = process.env.API_KEY;
  if (api_key) {
    const base_url = 'https://api.themoviedb.org/3';
    const api_url = `${base_url}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=20&api_key=${api_key}`;

    fetch(api_url)
      .then(result => result.json().then(resolve))
      .catch(error => {
        console.warn('Cannot fetch data from the server');
        return reject(`cant receive data, ${error.message}`);
      });
  } else {
    console.warn('API_KEY is not defined in .env file');
    return reject('Cannot receive data');
  }
});