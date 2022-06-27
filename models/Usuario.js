import { DataTypes } from "sequelize";
import db from "../config/db.js";
import bcrypt from "bcrypt";

const Usuario = db.define('usuarios',{
    nombre: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false, 
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false, 
    },

},{
    hooks:{
        beforeCreate: async function (usuario){
         const salt = await bcrypt.genSalt(10);
         usuario.password = await bcrypt.hash(usuario.password, salt)     
        }
    }
})

//funcion perzonalizada
Usuario.prototype.validarPassword = function(password){ //crear funciones a un objeto
    return bcrypt.compareSync(password, this.password) //
}

export default Usuario; //exportar una sola variable de este archivo