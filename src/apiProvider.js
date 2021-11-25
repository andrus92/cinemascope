// ejected from `requestData` method to allow quickly replace
// api provider
export function tmdbApi(api_key) {
  const base_url = 'https://api.themoviedb.org/3';
  return `${base_url}/discover/movie?with_genres=18&sort_by=vote_average.desc&vote_count.gte=20&api_key=${api_key}`;
}
