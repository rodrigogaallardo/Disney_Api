import generos from "./generos.js";
import peliculas from "./peliculas.js";
import personajes from "./personajes.js";
import {Genero,Pelicula,Personaje} from "../models/index.js"
import db from "../config/db.js";

const importarDatos = async () =>{
    try {
        //conectarse a la db
        await db.authenticate();

        //crear la tabla
        await db.sync();

        //crear los registros
        await Genero.bulkCreate(generos) // Crea los generos
        await Pelicula.bulkCreate(peliculas) // Crea las peliculas
        await Personaje.bulkCreate(personajes) // crea los personajes
        //await Pelicula.bulkCreate(peliculas)
        console.log("Datos importados correctamente");
        process.exit()    
        

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

const eliminarDatos = async () =>{
    try {
        //conectarse a la db
        await db.authenticate();

        //crear la tabla
        await db.sync();

        //Borrar las tablas y los datos
        await Personaje.destroy({where:{}}) 
        await Pelicula.destroy({where:{}}) 
        await Genero.destroy({where:{}})     
        
        
        console.log("Datos borrados correctamente");
        process.exit()    
        

    } catch (error) {
        console.log(error);
        process.exit(1)
    }
}

if (process.argv [2]=== '-i') { //para ejecutar la funcion ++ argumento con su posicion
    importarDatos();
}
if (process.argv [2]=== '-e') { //para ejecutar la funcion ++ argumento con su posicion
    eliminarDatos();
}