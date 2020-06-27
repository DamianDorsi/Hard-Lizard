let homePage = require("./homePage")
let enCartelera = require("./enCartelera")
let masVotadas = require("./masVotadas")
let sucursales = require("./sucursales")
let contacto = require("./contacto")
let preguntasFreq = require("./preguntasFreq")
let index = {
    homePage: function(res){
        res.write(homePage.titulo)
        res.write("\n\n")
        res.write("Total de peliculas disponibles: "+homePage.cantidad())
        res.write("\n\n")
        for(let titulo of homePage.listarPelis()){
            res.write(titulo)
            res.write("\n")
        }
        res.write("\n")
        res.write("*Recorda que podes visitar las secciones*")
        res.write("\n")
        res.write("En Cartelera")
        res.write("\n")
        res.write("Más Votadas")
        res.write("\n")
        res.write("Sucursales")
        res.write("\n")
        res.write("Contacto")
        res.write("\n")
        res.write("Preguntas Frecuentes")
        res.end()
    },
    enCartelera: function(res){
        res.write(enCartelera.titulo)
        res.write("\n\n")
        let movies = enCartelera.tituloOverview()
        movies.forEach(function(movie){
            res.write(movie.title)
            res.write("\n\n")
            res.write(movie.overview)
            res.write("\n\n")
        })
        res.end()
    },
    masVotadas: function(res){
        res.write(masVotadas.titulo)
        res.write("\n\n")
        let movies = masVotadas.masDe7()
        res.write("Peliculas con mas de 7 average: "+ masVotadas.masDe7().length)
        res.write("\n\n")
        res.write("Promedio de las peliculas: "+ masVotadas.promedioRating())
        res.write("\n\n")
        res.write("Listado de peliculas")
        res.write("\n\n")
        movies.forEach(function(movie){
            res.write(movie.title)
            res.write("\n\n")
            res.write(movie.overview)
            res.write("\n\n")
        })
        res.end()

    },
    sucursales: function(res){
        res.write(sucursales.titulo)
        res.write("\n\n")
        res.write("Total de salas: " + sucursales.totalSalas())
        res.write("\n\n")
        let salas = sucursales.datosSalas()
        res.write("Listado de salas: ")
        res.write("\n\n")
        salas.forEach(function(sala){
            res.write(sala.name)
            res.write("\n\n")
            res.write(sala.address)
            res.write("\n\n")
            res.write(sala.description)
            res.write("\n\n")
        })
        res.end()
    },
    contacto: function(res){
        res.write(contacto.titulo)
        res.write("\n\n")
        res.write(contacto.contenido)
        res.write("\n\n")
        res.end()
    },
    preguntasFreq: function(res){
        res.write(preguntasFreq.titulo)
        res.write("\n\n")
        res.write("Total de preguntas: " + preguntasFreq.totalPreguntas())
        res.write("\n\n")
        res.write("Preguntas frecuentes")
        res.write("\n\n")
        let preguntas = preguntasFreq.listadoPreguntas()
        preguntas.forEach(function(pregunta){
            res.write(pregunta.faq_title)
            res.write("\n\n")
            res.write(pregunta.faq_answer)
            res.write("\n\n")
        })
        res.end()

    }
}

module.exports = index