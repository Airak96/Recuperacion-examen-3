module.exports = function(sequelize, Sequelize) {
 
    var User = sequelize.define('retencion', {
 
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        nombre: {
            type: Sequelize.STRING,
            notEmpty: true
        },

        numero_factura: {
            type: Sequelize.STRING,
            notEmpty: true
        },
        monto: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        },
        fecha: {
            type: Sequelize.DATE 
        },
 
        external_factura: { //revisar esto referecncia
            type: Sequelize.UUID
        },
 
        valor_retenido: {
            type: Sequelize.DOUBLE,
            notEmpty: true
        },
 
 
        status: {
            type: Sequelize.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
 
 
    });
 
    return User;
 
}