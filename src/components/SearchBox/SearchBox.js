import React from 'react';
import './SearchBox.css';
import {useSelector, useDispatch} from "react-redux";
import {getValueImput, getMoviesList} from '../../redax/action'



export default function SearchBox() {   
    let state = useSelector(state => state) 
    let dispatch = useDispatch()            
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={(e) => dispatch(getMoviesList(e, state.searchMovies))}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            onChange = {(e) => dispatch(getValueImput(e.target.value))}
                            name = 'nameMuv'
                            value={state.searchMovies}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"                          
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!state.searchMovies}
                        >
                        Искать
                    </button>
                </form>                
            </div>
        );   
}

// let mapDispatchToProps = (dispatch) => {    
//     return {
//     getValue: (value) => {dispatch(getValueImput(value))},
//     movieRequest: (e, name) => {dispatch(getMoviesList(e, name))}    
//     }
// }
// let mapStateToProps = (state) => {   
//          return {
//         nameMovie:state.searchMovies        
//     }
// } 
// export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);