import React, { Component } from 'react';
import './SearchBox.css';
import {connect} from "react-redux";
import {getValueImput, getMoviesList} from '../../redax/action'
// import {GetListMovies, getMoviesList} from '../APIservice';


class SearchBox extends Component {    
    
    // movieRequest = (e) => {        
    //     e.preventDefault()        
    //     GetListMovies(this.state.searchMovies).then((data) => {                
    //         if (Array.isArray(data.Search)) {        
    //             let fix = '';
    //             let fdate = data.Search.filter((item) => {
    //                 if (item.imdbID !== fix) {
    //                     fix = item.imdbID 
    //                     return item
    //                 }                               
    //             })
    //             this.setState({listMove:fdate})
    //         } else {
    //             alert('Нет таких фильмов')
    //         }
    //     })
    // }
    render() {       
        return (
            <div className="search-box">
                <form className="search-box__form" onSubmit={(e) => this.props.movieRequest(e, this.props.nameMovie)}>
                    <label className="search-box__form-label">
                        Искать фильм по названию:
                        <input
                            onChange = {(e) => this.props.getValue(e.target.value)}
                            name = 'nameMuv'
                            value={this.props.nameMovie}
                            type="text"
                            className="search-box__form-input"
                            placeholder="Например, Shawshank Redemption"                          
                        />
                    </label>
                    <button
                        type="submit"
                        className="search-box__form-submit"
                        disabled={!this.props.nameMovie}
                        >
                        Искать
                    </button>
                </form>
                
            </div>
        );
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    getValue: (value) => {dispatch(getValueImput(value))},
    movieRequest: (e, name) => {dispatch(getMoviesList(e, name))}    
    }
}
let mapStateToProps = (state) => {    
    return {
        nameMovie:state.searchMovies        
    }
} 
export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);