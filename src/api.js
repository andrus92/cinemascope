export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
import apiProvider from './apiProvider';


export const requestData = () => new Promise((resolve, reject) => {
  // eslint-disable-next-line no-undef
  const api_key = process.env.API_KEY;
  if (api_key) {
    const tmbd = apiProvider.path(api_key);

    fetch(tmbd)
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