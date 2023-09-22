

import myImage from '../images/ajith.png';


function MovieTitle(){
    return (
      <div style={{marginLeft: '20px',marginTop:'10px'}}>
      <img src={myImage} alt="Mark Antony" className="movie-poster"  style={{ width: '200px', height: 'auto'}}/>
      
        <h2 >Thunivu U/A</h2>
        
        <strong> </strong>A major bank heist takes an unnerving turn when a mysterious interloper <br/> known only as Dark Devil begins to hijack the operation.
        
          <p>
           <strong> 2023 | U/A | 2h 23m | Action </strong> 
          </p>
          <p>
            <strong>Hero:</strong>Ajith Kumar
          </p>
          
          <p>
            <strong>Music Director:</strong> Ghibraan
          </p>
          <p>
            <strong>Director:</strong> H Vinoth
          </p>
          <p>
            <strong>IMDb Rating:</strong> 8.6/10
          </p>
       
        
     
    </div>
      );
}
export default MovieTitle;