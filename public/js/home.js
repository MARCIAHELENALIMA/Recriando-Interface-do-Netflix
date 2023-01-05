const main = document.queryselector(".main")
fetch( genres_list_htpp + new URLSearchParams({
    api_key: api_key
}))
.then(res => res.json())
.then( data => {

    data.genres.forEach(item => {
        fetchmovieslistbygenres(item.id, item.name)
    });
})
const fetchmovieslistbygenres = (id, genres)=>{
    fetch(movie_genres_http + new URLSearchParams({
        api_key:api_key,
        with_genres: id,
        page: Math.floor(math.random()*3) + 1
    }))
    .then(res => res.json())
    .then(data => {
       makecategoryelent('${genres}_movies', data.results)
    })
    .catch(err => console.log(err))
}

const makecategoryelement = (category, data) =>{
main.innerHTML +=

<div class="movie-list">
<button class="pre-btn">
  <img src="img/prev.png" alt="previous button">
</button>
<h1 class="movie-category">${category}</h1>

<div class="movie-container" id="${category}">

</div>
<button class="next-btn">
<img src="img/next.png" alt="next button">
</button>
</div>
}
