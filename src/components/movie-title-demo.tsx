import movieImage from '../images/ajith.png';

function MovieTitleDemo() {
  const movieData = [
    {
      "name": "Mark Antony",
      "thumbnail": "../images/ajith.png",
      "description": "Mark antony is a 2023 Indian Tamil-language",
      "year": "2023",
      "type": "U/A",
      "duration": "160",
      "genre": ["Sci-fi", "comedy"],
      "cast": ["Vishal", "Suriya", "Senthil"],
      "music_director": ["GV Prakash"],
      "director": ["Aadhik"],
      "ratings": {
        "imdb": { "rating": 7.3, "votes": 15748, "max_rating": 10 },
        "rotten_tomatoes": { "rating": 4.3, "votes": 1578, "max_rating": 5 },
        "mmdb": { "rating": 8.3, "votes": 148, "max_rating": 10 }
      }
    }, {
      "name": "Thunivu",
      "thumbnail": "../images/ajith.png",
      "description": "Thuivu is a movie in india angu",
      "year": "2022",
      "type": "A",
      "duration": "140",
      "genre": ["Sci-fi", "thriller"],
      "cast": ["AK", "Suriya", "Senthil"],
      "music_director": ["Gibran"],
      "director": ["Vinoth"],
      "ratings": {
        "imdb": { "rating": 5.5, "votes": 154545748, "max_rating": 10 },
        "rotten_tomatoes": { "rating": 3.3, "votes": 1578554, "max_rating": 5 },
        "mmdb": { "rating": 9.4, "votes": 1458, "max_rating": 10 }
      }
    }
  ];

  return (
    //movieData.map(item => {
    <div style={{ marginLeft: '20px', marginTop: '10px' }}>

      <img src={movieImage} alt={movieData[0].name} className="movie-poster" style={{ width: '200px', height: 'auto' }} />

      <h2 >{movieData[0].name} </h2>

      <strong>{movieData[0].description} </strong>

      <p>
        <strong> {movieData[0].year} | {movieData[0].type} | {movieData[0].duration} mins | {movieData[0].genre} </strong>
      </p>
      <p>
        <strong>Cast:</strong>{movieData[0].cast}
      </p>

      <p>
        <strong>Music Director:</strong> {movieData[0].music_director}
      </p>
      <p>
        <strong>Director:</strong> {movieData[0].director}
      </p>
      <p>
        <strong>IMDb Rating:</strong> {movieData[0].ratings.imdb?.rating} / {movieData[0].ratings.imdb?.max_rating}
        <strong>Rotten Tomatoes:</strong> {movieData[0].ratings.rotten_tomatoes?.rating} / {movieData[0].ratings.rotten_tomatoes?.max_rating}
        <strong>MMDB Rating:</strong> {movieData[0].ratings.mmdb?.rating} / {movieData[0].ratings.mmdb?.max_rating}
      </p>



    </div>
  )
}
export default MovieTitleDemo;