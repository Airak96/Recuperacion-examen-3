var pdf = require('html-pdf');
var models = require('./../models');
var Retencion = models.retencion;

const Reporte = {};

Reporte.crear = (req, res) => {
    Retencion.findAll()
        .then(resp => {            
            var contenido = '<h1>Prueba de creacion de codigo</h1> <ul>';
            resp.forEach(element => {
                contenido += '<li>'+element.nombre+' | $'+element.monto+'</li>';
            });
            contenido += '</ul>';
            pdf.create(contenido).toFile('./test.pdf',function(err, respuesta){
                if(err){
                    console.log(err);
                    res.status(500).send();
                }else{
                    res.redirect('/dashboard');
                }
            });
        }).catch(err => {
            console.log(err);
            res.status(500).send();
        })
    
    
}

var options = {
    "format":"A4",
    "header":{
        "height":"60px"
    },
    "footer":{
        "heigt":"22mm"
    },
    "base":'file://Users/midesweb/carpeta_base'
};

module.exports = Reporte;
