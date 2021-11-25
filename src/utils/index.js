export const humanizeGenres = (genres) => genres.reduce((str, g, idx, len) => `${g}${idx<len.length-1 ? '' : ', '}${str}`, '');
