const fs = require("fs");
let enCartelera = {
    db: './data/movies.json',
    titulo: "En Cartelera",
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.db, "utf-8");
        let movies = JSON.parse(moviesJson)
        return movies;
    },
    totalPelis: function(){
        return this.leerJSON().total_movies
    },
    tituloOverview: function(){
        let movies = this.leerJSON();
        let soloMovies = []
        movies.movies.forEach(function(movie){
            soloMovies.push(movie)
        })
        return soloMovies
    },
    }
    
    

module.exports = enCartelera