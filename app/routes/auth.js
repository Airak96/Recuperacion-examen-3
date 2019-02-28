var express = require('express');
var app = express.Router();
var passport = require('passport');

var cuenta= require('../controllers/cuentaController');
var cuentaController=new cuenta();
var reporteController=require('../controllers/reporteController');
module.exports = function (app, passport) {

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/login');
    }
  app.get('/crear',cuentaController.crearpdf);
  app.get('/dashboard', cuentaController.dashboard);
    app.get('/registro', cuentaController.verRegistro);
   app.get('/cerrar_sesion', cuentaController.cerrar)
    app.get('/login', cuentaController.verLogin);
    
    

    app.post('/signup',
        passport.authenticate('local-signup', {
            successRedirect: '/login',
            failureRedirect: '/registro', failureFlash: true
        }
        ));


  /*  app.post('/signin', passport.authenticate('local-signin',
        {
            successRedirect: '/dashboard',
            failureRedirect: '/login',
            failureFlash: true
        }
    ));*/




    app.get('/listar', cuentaController.listarMeses);
    app.post('/guardar/Retencion', cuentaController.guardarRetencion);
    app.post('/saveReporte',reporteController.crear);

}

