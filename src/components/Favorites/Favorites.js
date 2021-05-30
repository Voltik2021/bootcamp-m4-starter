import React from 'react';
import './Favorites.css';
import {useDispatch, useSelector} from 'react-redux'
import {delMuvieSelectList, creatingAssembly, getTitleValue} from '../../redax/action'


export default function Favorites() { 
    let state = useSelector(state => state);
    let dispatch = useDispatch()

    return (
        <div className="favorites">
            <input value= {state.titleNewList} className="favorites__name" onChange = {(e) => dispatch(getTitleValue(e.target.value))}/>
            <ul className="favorites__list">                
                {state.selectedListMovis.map((item) => {
                    return <li key={item.imdbID}>{item.Title} ({item.Year})<button onClick = {() => dispatch(delMuvieSelectList(item.imdbID))}>X</button></li>;
                })}
            </ul>
            <button type="button" className="favorites__save" onClick = {() => {dispatch(creatingAssembly(state.selectedListMovis, state.titleNewList))}}>Сохранить список</button>
        </div>
    );   
}

// let mapStateToProps = (state) => {
//     return {        
//         titleNewList: state.titleNewList,
//         selectedListMovis: state.selectedListMovis
//     }
// }

// let mapDispatchToProps = (dispatch) => {
//     return {
//         del: (imdbID) => {dispatch(delMuvieSelectList(imdbID))},
//         creatingAssembly: (arr, title) => {dispatch(creatingAssembly(arr, title))},
//         getTitle: (value) => {dispatch(getTitleValue(value))}
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Favorites);