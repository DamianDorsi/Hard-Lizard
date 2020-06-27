const fs = require("fs");
let sucursales= {
    db: "./data/theaters.json",
    titulo: "Nuestras Salas: ",
    leerJSON: function(){
        let teatroJson = fs.readFileSync(this.db, "utf-8");
        let teatros = JSON.parse(teatroJson)
        return teatros;
    },
    totalSalas: function(){
        return this.leerJSON().total_theaters;
    },
    datosSalas: function(){
        let salasJson = this.leerJSON()
        let salas = []
        salasJson.theaters.forEach(function(sala){
            salas.push(sala)
        })
        return salas
    },


}














module.exports = sucursales