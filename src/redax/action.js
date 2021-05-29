import {GetListMovies} from '../components/APIservice';

export function getValueImput(value) {
    return {type:'CHANGE_SEARCH_MOVIES', valueInput:value}

} 

export function getMoviesList(e, name) {   
    e.preventDefault()    
    return (dispatch) => {
         dispatch(startGetMove());

         GetListMovies(name)
         .then(data => dispatch(SuccessGetMovies(data)))
         .catch(err => dispatch(errGetMovies(err)))

    }   
} 

function startGetMove() {
    return {
        type: 'START_GET_MOVIES'
    }
}

function SuccessGetMovies(arrMovies) {
    return {
        type: 'SUCCESS_GET_MOVIES',
        payload:arrMovies
    }
}

function errGetMovies(err) {
    return {
        type: 'ERR_GET_MOVIES',
        payload:err
    }
}
