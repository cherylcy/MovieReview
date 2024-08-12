const api_key = process.env["TMDB_API_KEY"];
const APILINK = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${api_key}&page=1`;
const SEARCHAPI = `https://api.themoviedb.org/3/search/movie?&api_key=${api_key}&query=`;

export default class MoviesController {
  static async apiGetMovies(req, res, next) {
    try {
      const { query } = req.query;
      if (query === undefined) {
        fetch(APILINK)
          .then((apires) => apires.json())
          .then(function (data) {
            res.json(data);
          });
      } else {
        fetch(SEARCHAPI + query)
          .then((apires) => apires.json())
          .then(function (data) {
            res.json(data);
          });
      }
    } catch (e) {
      console.log(`api, ${e}`);
      res.status(500).json({ error: e });
    }
  }
}
