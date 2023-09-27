
//import myImage from '../images/ajith.png';
import React, { useState } from 'react';
function MovieTitle() {
  

  const Data = [
    {
      name: 'Mark Antony',
      thumbnail: '../images/ajith.png',
      description: 'Mark Antony is a 2023 Indian Tamil-language',
      year: '2023',
      type: 'U/A',
      duration: '160',
      genre: ['Sci-fi', 'comedy'],
      cast: ['Vishal', 'Suriya', 'Senthil'],
      music_director: ['GV Prakash'],
      director: ['Aadhik'],
      ratings: {
        imdb: { rating: 7.3, votes: 15748, max_rating: 10 },
        rotten_tomatoes: { rating: 4.3, votes: 1578, max_rating: 5 },
        mmdb: { rating: 8.3, votes: 148, max_rating: 10 },
      },
    },
    {
      name: 'Thunivu',
      thumbnail: '../images/ajith.png',
      description: 'Thunivu is a movie in India',
      year: '2022',
      type: 'A',
      duration: '140',
      genre: ['Sci-fi', 'thriller'],
      cast: ['AK', 'Suriya', 'Senthil'],
      music_director: ['Ghibran'],
      director: ['Vinoth'],
      ratings: {
        imdb: { rating: 5.5, votes: 154545748, max_rating: 10 },
        rotten_tomatoes: { rating: 3.3, votes: 1578554, max_rating: 5 },
      },
    },
  ];

  // Initialize state to keep track of the selected movie index
  const [selectedMovieIndex, setSelectedMovieIndex] = useState(null);

  // Function to handle movie click
  const handleMovieClick = (index) => {
    setSelectedMovieIndex(index);
  };
return (
    <div>
      {Data.map((movie, index) => (
        <div key={movie.name} style={{ marginLeft: '20px', marginTop: '10px' }}>
          <img src={movie.thumbnail} alt={movie.name} className="movie-poster" style={{ width: '200px', height: 'auto' }} />
          <h2 onClick={() => handleMovieClick(index)}>
            {movie.name} {movie.type}
          </h2>
         {selectedMovieIndex === index ? (
            <div>
              {movie.name === 'Thunivu' ? (
                <p>Thunivu  is a 2023 Indian Tamil-language action heist film written and directed by H. Vinoth and produced by Boney Kapoor.[9] It stars Ajith Kumar in lead role with Manju Warrier, Samuthirakani, John Kokken, Ajay and Veera in supporting roles.</p>
              ) : (
                <p>Mark Antony is a 2023 Indian Tamil-language science fiction action comedy film directed by Adhik Ravichandran and produced by S. Vinod Kumar under Mini Studio. The film stars Vishal and S. J. Suryah in dual roles, alongside Ritu Varma, Sunil, Selvaraghavan and Abhinaya. The music is composed by G. V. Prakash Kumar, while the cinematography and editing are handled by Abinandhan Ramanujam and Vijay Velukutty.</p>
              )}
            </div>
          ) : null}
          
          <div>
            <p>{movie.description}</p>
          </div>
          <p>
            {movie.year} | {movie.type} | {movie.duration}m | {movie.genre.join(', ')}
          </p>
          <p>
            <strong>Cast:</strong> {movie.cast.join(', ')}
          </p>
          <p>
            <strong>Music Director:</strong> {movie.music_director.join(', ')}
          </p>
          <p>
            <strong>Director:</strong> {movie.director.join(', ')}
          </p>
          <p>
            <strong>IMDb Rating:</strong> {movie.ratings.imdb.rating}/{movie.ratings.imdb.max_rating} |
            <strong>Rotten Tomatoes Rating:</strong> {movie.ratings.rotten_tomatoes.rating}/{movie.ratings.rotten_tomatoes.max_rating} |
            <strong>mmdb Rating:</strong> {movie.ratings.mmdb ? `${movie.ratings.mmdb.rating}/${movie.ratings.mmdb.max_rating}` : 'N/A'}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MovieTitle;
