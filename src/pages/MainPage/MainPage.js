import React, { Component } from 'react';
import './MainPage.css';
import { Link} from 'react-router-dom'
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import {creatingMovieList} from '../../components/APIservice';
import {connect} from 'react-redux';

class MainPage extends Component {
    state = {
        searchMovies: '',
        listMove: [],
        selectedListMovis: [],
        titleNewList: 'Новый список',
        dataSaveList: []
    }
    changeMovies = (e) => {             
        this.setState({searchMovies:e.target.value})
    }        

    requestGeneration = () => {
        let arr = this.state.selectedListMovis.map((item) => item.imdbID)

        creatingMovieList(arr, this.state.titleNewList).then((data) => {
            let arrSelectMuv = [...this.state.dataSaveList, data]
            this.setState({dataSaveList:arrSelectMuv})
        })        
        let emptyArray = []
        this.setState({selectedListMovis:emptyArray})
    }

    getTatle = (e) => {
        this.setState({titleNewList: e.target.value})
    }

    render() { 
        return (
            
            <div className="main-page">                                         
                <Header />
                <main className="main-page__content">
                    <section className="main-page__main-section">
                        <div className="main-page__search-box">
                            <SearchBox  changeMovies = {this.changeMovies} movieRequest = {this.movieRequest}/>
                        </div>
                        <div className="main-page__movies">
                            <Movies listMove = {this.state.listMove} addToList = {this.addToList}/>
                        </div>
                    </section>
                    <aside className="main-page__favorites">
                        <Favorites selectedListMovis = {this.state.selectedListMovis}
                         getTatle = {this.getTatle} titleNewList = {this.state.titleNewList}
                         requestGeneration = {this.requestGeneration}                         
                         />  
                        <div className = 'divSaveList'>
                            <p>Мои списки:{this.state.dataSaveList.length === 0?'  не созданны':null}</p>
                        {this.props.saveList.map(item =>   <Link className = "Linkbr"  
                                                                    to = {`/list/${item.id}`} 
                                                                    key={item.id}
                                                                    target="_blank"
                                                                    >
                                                                        {item.title}
                                                                </Link>)} 
                        </div>                  
                    </aside>
                
                </main>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        saveList: state.dataSaveList
    }
}
 
export default connect(mapStateToProps, null)(MainPage);