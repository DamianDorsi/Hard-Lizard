const fs = require ("fs");
let masVotadas = {
    db: "./data/movies.json",
    titulo: "Mas Votadas",
    leerJSON: function(){
        let moviesJson = fs.readFileSync(this.db, "utf-8");
        let movies = JSON.parse(moviesJson);
        return movies;
    },
    masDe7: function(){
        let movies = this.leerJSON();
        let average7 = movies.movies.filter(function(movie){
            return movie.vote_average >= 7;
    })
         return average7 
    },
    promedioRating: function(){
        let sinPromedio = this.masDe7()
        let arrayDe7 = []
        sinPromedio.forEach(function(average){
            arrayDe7.push(average.vote_average)
        })
        let suma = arrayDe7.reduce(function(acum,num){
            return acum + num
        })
        let promedioFinal = suma / arrayDe7.length
        return promedioFinal
    }
}
module.exports = masVotadas