let initialState = {
    searchMovies: '',
    listMove: [],
    selectedListMovis: [],
    titleNewList: 'Новый список',
    dataSaveList: []
}


export default function reducer (state = initialState, action){
    let newState = null;
    let searchMovie = null;
    let id = null;
    let newList = null;
    console.log(action.type)
    switch(action.type){
        
        case 'CHANGE_SEARCH_MOVIES':            
            newState = {...state}
            newState.searchMovies = action.valueInput
            return newState
        case 'START_GET_MOVIES':
            console.log('start')
            return state;
            
        case 'SUCCESS_GET_MOVIES':
            let arrMovies = action.payload.Search
            if (Array.isArray(arrMovies)) {        
                let fix = '';
                let fdate = arrMovies.filter((item) => {
                    if (item.imdbID !== fix) {
                        fix = item.imdbID 
                        return item
                    }                               
                })
                newState = {...state}
                newState.listMove = fdate 
                return newState                
            } else {
                alert('Нет таких фильмов')
            }            
            return state
            
        case 'ERR_GET_MOVIES':
            console.log(action.err)
            return state
        case 'ADD_MOVIE_TO_SELECT_LIST':            
            id = action.payload;
            searchMovie = state.listMove.find((item) => {return item.imdbID === id})
            newList = [...state.selectedListMovis, searchMovie]
            newState = {...state};
            newState.selectedListMovis = newList
            let flag = newState.selectedListMovis.filter((item) => {return item.imdbID === id});
            
            if (flag.length === 1) {               
                return newState
            }            
            return state  
        case 'DELETE_MOVIE_TO_SELECT_LIST':
            id = action.payload
            newList = state.selectedListMovis.filter((item) => {return item.imdbID !== id})
            newState = {...state};
            newState.selectedListMovis = newList
            return newState
        case 'START_CREATING_ASSEMBLY':
            console.log('start2')
            return state
        case 'SUCCASS_CREATING_ASSEMBLY':            
            newList = [...state.dataSaveList, action.payload]
            newState = {...state};
            newState.dataSaveList = newList;
            return newState
        case 'ERR_CREATING_ASSEMBLY':
            console.log(action.payload)
            return state
        case'GET_TITLE_VALUE':
            newState = {...state};
            newState.titleNewList = action.payload;
            return newState

            
        default: return state
    }

}