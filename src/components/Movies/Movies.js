import React, { Component } from 'react';
import MovieItem from '../MovieItem/MovieItem';
import './Movies.css';
import {connect} from 'react-redux';

class Movies extends Component {  
    
    render() {        
        return ( 
            <ul className="movies">                         
                {this.props.listMove.map((movie) => (
                    <li className="movies__item" key={movie.imdbID}>
                        <MovieItem {...movie} addToList = {this.props.addToList}/>                        
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Movies);