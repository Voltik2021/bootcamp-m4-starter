import React from 'react';
import './MovieItem.css';
import {useDispatch} from 'react-redux';
import {addToListSelectMovie} from '../../redax/action';

export default function MovieItem(props) {   
    let dispatch = useDispatch()
    let {Title, Year, Poster, imdbID} = props
    return (
        <article className="movie-item">
            <img className="movie-item__poster" src={Poster} alt={Title} />
            <div className="movie-item__info">
                <h3 className="movie-item__title">{Title}&nbsp;({Year})</h3>
                <button type="button" className="movie-item__add-button" onClick = {() => dispatch(addToListSelectMovie(imdbID))}>Добавить в список</button>
            </div>
        </article>
    );   
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         addToListSelectMovie:(imdbID) => {dispatch(addToListSelectMovie(imdbID))}
//     }
// }
 
// export default connect(null, mapDispatchToProps)(MovieItem);