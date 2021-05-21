import React, { Component } from 'react';
import './ListPage.css';
import {renderingList} from '../../components/APIservice'

class ListPage extends Component {
    state = {
        movies: null
    }


    componentDidUpdate(prevProps) {
        if (prevProps !== this.props){
            renderingList(this.props.movies.movies).then(data => this.setState({movies: data}))
        }
        
        // const id = this.props.match.params;
        // console.log(id);
        // // TODO: запрос к сервер на получение списка
        // // TODO: запросы к серверу по всем imdbID
    }
    render() { 
        let {movies} = this.state
        return (
            
            <div className="list-page">                
                <h1 className="list-page__title">Мой список</h1>
                {console.log(movies)}
                <ul>
                    {movies&&movies.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a href= {`https://www.imdb.com/title/${item.imdbID}/`} target="_blank">{item.title} ({item.year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}
 
export default ListPage;