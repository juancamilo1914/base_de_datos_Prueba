const TABLA = 'auth';
module.exports = function (dbInyectada){

    let db = dbInyectada;

if(!db){
    db = require('../../DB/mysql');
}

function agregar(data){
    const authData = {
        id: data.id,
    }

    if(data.ususario){
        authData.usuario = data.usuario;
    }

    if(data.password){
        authData.password = data.password;
    }
    return db.agregar(TABLA, authData);
}

return {
    agregar,
}
}