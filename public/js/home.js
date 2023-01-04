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
    .then(data => console.log(data))
}
