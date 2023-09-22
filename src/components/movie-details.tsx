import myImage from '../images/mark-antony.png';

function MovieDetails() {
  return (
    <div style={{marginLeft: '20px'}}>
      <img src={myImage} alt="Mark Antony" className="movie-poster"  style={{ width: '200px', height: 'auto'}}/>
      
        <h2 >Mark Antony U/A</h2>
        <p >
        <strong> </strong>Mark Antony is a 2023 Indian Tamil-language science fiction <br/> action  black comedy film.
        </p>
        <p>
           <strong> 2023 | U/A | 2h 40m | Sci-fi </strong> 
          </p>
          
          <p>
            <strong>Hero:</strong> Vishal,SJ suriya
          </p>
          
          <p>
            <strong>Music Director:</strong> GV Prakash
          </p>
          <p>
            <strong>Director:</strong> Aadhik ravichandran
          </p>
          <p>
            <strong>IMDb Rating:</strong> 7.6/10
          </p>
       
        
     
    </div>
  );
}

export default MovieDetails;

