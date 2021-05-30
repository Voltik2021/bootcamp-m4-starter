import React from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {useSelector} from 'react-redux';

export default function Movies() {  
   let state =useSelector(state => state);           
    return ( 
        <ul className="movies">                         
            {state.listMove.map((movie) => (
                <li className="movies__item" key={movie.imdbID}>
                    <MovieItem {...movie} />                        
                </li>
            ))}
        </ul>
    );
    
}


//  let mapStateToProps = (state) => {
//      return {
//         listMove:state.listMove
//      }
//  }
// export default connect(mapStateToProps, null)(Movies);