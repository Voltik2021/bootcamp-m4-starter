import {GetListMovies, creatingMovieList} from '../components/APIservice';

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

export function addToListSelectMovie(id) {
    console.log('1')
    return {
        type: 'ADD_MOVIE_TO_SELECT_LIST',
        payload:id
    }
}

export function delMuvieSelectList(id) {
    return {
        type: 'DELETE_MOVIE_TO_SELECT_LIST',
        payload: id
    }
}

export function creatingAssembly(arr, title){
    console.log('2')
    return (dispatch) =>{        
        dispatch(startCreatingAssembly())

        creatingMovieList(arr, title)
        .then(data => dispatch(successCreatingAssembly(data)))
        .catch(err => dispatch(errCreatingAssembly(err)))
    }
}

function startCreatingAssembly() {
    return {
        type: 'START_CREATING_ASSEMBLY'
    }
}

function successCreatingAssembly(data) {
    return {
        type: 'SUCCASS_CREATING_ASSEMBLY',
        payload: data
    }
}

function errCreatingAssembly(err) {
    return {
        type: 'ERR_CREATING_ASSEMBLY',
        payload: err
    }
}

export function getTitleValue(value) {
    return {
        type: 'GET_TITLE_VALUE',
        payload: value
    }
}
