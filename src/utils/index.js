export const humanizeGenres = (genres) => genres.reduce((str, g, idx, len) => `${g}${idx<len.length-1 ? '' : ', '}${str}`, '');

export const clampText = (str, len = 100) => `${str.substring(0, len)}...`;