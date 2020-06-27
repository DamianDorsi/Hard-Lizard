const index = require("./src/index")
let router = function(url, res){
switch(url){
    case "/":
    index.homePage(res)
        break;
    case "/contacto":
    index.contacto(res)
        break;
    case "/enCartelera":
    index.enCartelera(res)
        break;
    case "/masVotadas":
    index.masVotadas(res)
        break;
    case "/preguntasFreq":
    index.preguntasFreq(res)
        break;
    case "/sucursales":
    index.sucursales(res)
        break;
    default:
}
}

module.exports = router