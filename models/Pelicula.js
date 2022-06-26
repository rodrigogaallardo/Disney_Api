import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Pelicula = db.define('peliculas',{
    titulo: {
        type: DataTypes.STRING,
        allowNull: false, 
    },
    calificacion: {
        type: DataTypes.INTEGER,
        validate: {min: 1, max:5},
        allowNull: false, 
    },   
    imagen: {
        type: DataTypes.STRING, // guarda url
    },
})

export default Pelicula; //exportar una sola variable de este archivo