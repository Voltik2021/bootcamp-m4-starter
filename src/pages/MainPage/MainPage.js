import React from 'react';
import './MainPage.css';
import {Link} from 'react-router-dom'
import Header from '../../components/Header/Header';
import SearchBox from '../../components/SearchBox/SearchBox';
import Movies from '../../components/Movies/Movies';
import Favorites from '../../components/Favorites/Favorites';
import {useSelector} from 'react-redux';

export default function MainPage() { 
    let state = useSelector(state => state);    
    return (        
        <div className="main-page">                                         
            <Header />
            <main className="main-page__content">
                <section className="main-page__main-section">
                    <div className="main-page__search-box">
                        <SearchBox />
                    </div>
                    <div className="main-page__movies">
                        <Movies />
                    </div>
                </section>
                <aside className="main-page__favorites">
                    <Favorites/>  
                    <div className = 'divSaveList'>
                        <p>Мои списки:{state.dataSaveList.length === 0?'  не созданны':null}</p>
                    {state.dataSaveList.map(item =>   <Link className = "Linkbr"  
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

// let mapStateToProps = (state) => {
//     return {
//         saveList: state.dataSaveList
//     }
// }
 
// export default connect(mapStateToProps, null)(MainPage);