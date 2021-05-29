let initialState = {
    searchMovies: '',
    listMove: [],
    selectedListMovis: [],
    titleNewList: 'Новый список',
    dataSaveList: []
}


export default function reducer (state = initialState, action){
    let newState = null;
    switch(action.type){
        case 'CHANGE_SEARCH_MOVIES':            
            newState = {...state}
            newState.searchMovies = action.valueInput
            return newState
        case 'START_GET_MOVIES':
            console.log('start')
            return state;
            
        case 'SUCCESS_GET_MOVIES':
            let newListMovies = [...state.listMove, action]
            newState = {...state}
            newState.listMove = newListMovies;
            return newState
            
        case 'ERR_GET_MOVIES':
            console.log(action.err)
            return state
        default: return state
    }

}