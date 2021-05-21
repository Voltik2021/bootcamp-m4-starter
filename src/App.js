import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import ListPage from './pages/ListPage/ListPage';
import {getSelectMovieList} from './components/APIservice'

import './reset.css';
import './common.css';

class App extends React.Component {

  state = {
    movies:null
  }
  getIDMove = (id) => {
    getSelectMovieList(id).then(data => this.setState({movies: data}))
  }
  render() {
    return (
      <div className="app">
        <Route path="/" exact>
          <MainPage getIDMove = {this.getIDMove}/>
        </Route>
        <Route path="/list" >
          <ListPage  movies = {this.state.movies}/>
        </Route>
      </div>
    );
  }
}

export default App;
