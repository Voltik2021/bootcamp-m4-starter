
export function GetListMovies(nameMovies) {
   return fetch(`http://www.omdbapi.com/?apikey=1ce064a1&s=${nameMovies}`)
        .then(response => response.json())
        
}

export function creatingMovieList(arr, title) {
    let info = {
        title: title,
        movies: arr
    }    
    return fetch('https://acb-api.algoritmika.org/api/movies/list', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(info)
    }).then(response => response.json());

  
}

export function getSelectMovieList(id){
    return fetch(`https://acb-api.algoritmika.org/api/movies/list/${id}`)
        .then(response => response.json())
}

export function GetListIDMovies() {
    return fetch(`http://www.omdbapi.com/?apikey=1ce064a1&i=tt3896198`)
         .then(response => response.json()).then(data => console.log(data))
         
 }


 export function renderingList(arr){
     let arrObj = arr.map((item) => fetch(`http://www.omdbapi.com/?apikey=1ce064a1&i=${item}`).then(response => response.json()))
    return Promise.all(arrObj)
 }
 
//  "tt0076759"
// 1: "tt0080684"
// 2: "tt0086190"
// 3: "tt2488496"