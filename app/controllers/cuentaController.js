'use strict';
var pdf = require('html-pdf');
const uuidv4 = require('uuid/v4');
var models = require('./../models');
var Retencion = models.retencion;
/*var contenido = '<h1>Prueba de creacion de codigo</h1>';
var options = {
    "format": "A4",
    "header": {
        "height": "60px"
    },
    "footer": {
        "heigt": "22mm"
    },
    // "base":'file://Users/midesweb/carpeta_base'
};*/

class CuentaController {
    verLogin(req, res) {
        res.render('signin', {
            //    error: req.flash("err_cred")
        });
    }
    verRegistro(req, res) {
        res.render('signup');
    }

    cerrar(req, res) {
        req.session.destroy();
        res.redirect('/login');
    }

    dashboard(req, res) {
        res.render('index', {
            fragmento: 'fragmentos/frm_regis'
        });
        //  res.send(req.session);
    }


    crearpdf(req, res) {
        pdf.create(contenido, options).toFile('./test.pdf', function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        });
    }

    guardarRetencion(req, res) {


        if (req.body.external_modificar == 1) {
            Retencion.create({
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                external_factura: uuidv4(),
                numero_factura: req.body.numero,
                monto: req.body.monto,
                valor_retenido: req.body.valor

            }).then(function (newHistorial, created) {
                if (newHistorial) {
                    console.log('se ah registrado una retencion');
                    // req.flash('info', 'Se ha creado correctamente');
                    res.redirect('/dashboard');

                }
            });
        } else {
            Retencion.update({
                nombre: req.body.nombre,
                fecha: req.body.fecha,
                numero_factura: req.body.numero,
                monto: req.body.monto,
                valor_retenido: req.body.valor

            }, { where: { external_factura: req.body.external } }).then(function (updatedVino, created) {
                if (updatedVino) {
                    // req.flash('info', 'Se ha creado correctamente', false);
                    res.redirect('/dashboard');
                }
            });
        }


    }

    listarMeses(req, res) {
        Retencion.findAll({}).then(function (medicos) {
            if (medicos) {
                res.status(200).json(medicos);

            }
        });
    }





}
module.exports = CuentaController;