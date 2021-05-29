import React, { PureComponent } from 'react';
import './Favorites.css';
import {connect} from 'react-redux'
import {delMuvieSelectList, creatingAssembly, getTitleValue} from '../../redax/action'


class Favorites extends PureComponent {
    state = {
        title: 'Новый список',
        movies: [
            { imdbID: 'tt0068646', title: 'The Godfather', year: 1972 }
        ]
    }

    render() { 
        return (
            <div className="favorites">
                <input value= {this.props.titleNewList} className="favorites__name" onChange = {(e) => this.props.getTitle(e.target.value)}/>
                <ul className="favorites__list">                
                    {this.props.selectedListMovis.map((item) => {
                        return <li key={item.imdbID}>{item.Title} ({item.Year})<button onClick = {() => this.props.del(item.imdbID)}>X</button></li>;
                    })}
                </ul>
                <button type="button" className="favorites__save" onClick = {() => {this.props.creatingAssembly(this.props.selectedListMovis, this.props.titleNewList)}}>Сохранить список</button>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        selectedListMovis: state.selectedListMovis,
        titleNewList: state.titleNewList,
        selectedListMovis: state.selectedListMovis
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        del: (imdbID) => {dispatch(delMuvieSelectList(imdbID))},
        creatingAssembly: (arr, title) => {dispatch(creatingAssembly(arr, title))},
        getTitle: (value) => {dispatch(getTitleValue(value))}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);