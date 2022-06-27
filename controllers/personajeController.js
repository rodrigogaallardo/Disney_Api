import {Personaje} from "../models/index.js"

const getPersonajes = async (req,res) =>{
    const {name,age,movies} = req.query
    try {
        if(!name && !age && !movies){

            const personajes = await Personaje.findAll(
                {
                    attributes: ["nombre","imagen"],
                }
                ); // para el modelo
                return res.json(personajes);
        }
        if (!name && !movies &&age) {
            const personajes = await Personaje.findAll(
                {
                    attributes: ["nombre","imagen"],
                    where:{
                        edad: age,
                    }
                }
                ); // para el modelo
                return res.json(personajes);
        }
        if (name && !age && !movies) {
            const personajes = await Personaje.findAll(
                {
                    attributes: ["nombre","imagen"],
                    where:{
                        nombre: name,
                    }
                }
                ); // para el modelo
                return res.json(personajes);
        }
        if (!name && !age && movies) {
            const personajes = await Personaje.findAll(
                {
                    attributes: ["nombre","imagen"],
                    where:{
                        peliculaId: movies,
                    }
                }
                ); // para el modelo
                return res.json(personajes);
        }
        
    } catch (error) {
        res.status(403).json ({error:"Hubo un error"})
    }
};

const getPersonaje = async (req,res) =>{
    const {id} = req.params

    try {
        const personaje = await Personaje.findByPk(id);   
        if(personaje){

                return res.json(personaje);

        }else{
            return res.json({error: "Personaje no encontrado"});
        }
    } catch (error) {
        return res.json ({error:"Hubo un error"})
    }
};

const postPersonajes = async (req,res) =>{

    try {
        const nuevoPersonaje = await Personaje.create(req.body) 
        res.status(201).json({msg: "Personaje agregado"})
    } catch (error) {
        console.log('hubo un error:',error);
        res.status(403).json ({error:"Error en la creacion de personaje"})
    }
   
};
const putPersonajes = async (req,res) =>{
    const {id} = req.params 

    try {
        const personaje = await Personaje.findByPk(id);
        if(personaje){
            await Personaje.update(req.body, {
                where: {
                    id
                }
            })
            res.json({msg: 'Personaje Actualizado'})

        }else{
            res.json({msg: 'El personaje no existe'})
        }
        

    } catch (error) {
        res.status(403).json ({error:"Hubo un error"})
    }

};

const deletePersonajes = async (req,res) =>{
    const {id} = req.params

    try {
        const personaje = await Personaje.findByPk(id);
        if(personaje){
            await Personaje.destroy({
                where: {
                    id
                }
            })
            res.json({msg: 'Personaje Eliminado'})

        }else{
            res.json({msg: 'El personaje no existe'})
        }
        
    } catch (error) {
        res.status(403).json ({error:"Hubo un error"})
    } 
    
};
export {getPersonajes, postPersonajes,putPersonajes,deletePersonajes,getPersonaje};