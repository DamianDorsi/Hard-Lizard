const fs = require("fs")
let preguntasFreq = {
    db: "./data/faqs.json",
    titulo: "Preguntas Frecuentes",
    leerJSON: function(){
        faqsJson = fs.readFileSync(this.db, "utf-8")
        faqs = JSON.parse(faqsJson)
        return faqs
    },
    totalPreguntas: function(){
        return this.leerJSON().total_faqs;
    },
    listadoPreguntas: function(){
        let listaJson = this.leerJSON()
        let preguntas = []
        listaJson.faqs.forEach(function(pregunta){
            preguntas.push(pregunta)
        })
        return preguntas
    }

}









module.exports = preguntasFreq;