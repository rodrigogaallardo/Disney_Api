import {Pelicula} from "../models/index.js"

const getPeliculas = async (req, res) => {
  const {name,genero,order} = req.query

  try {
    if (!name && !genero && !order)
    {
      const peliculas = await Pelicula.findAll({
        attributes: ["titulo", "imagen","createdAt"],
      });
      return res.json(peliculas);
    }
    if (!name && !genero && order)
    {
      if (req.query.order =="ASC") {
        const peliculas = await Pelicula.findAll({
          attributes: ["titulo", "imagen","createdAt"],   
          order: [
            ["titulo", "ASC"],
          ],
          
        });
        return res.json(peliculas);        
      }
      if (req.query.order =="DESC") {
        const peliculas = await Pelicula.findAll({
          attributes: ["titulo", "imagen","createdAt"],   
          order: [
            ["titulo", "DESC"],
          ],
          
        });
        return res.json(peliculas);        
      }
      
    }
    
    if (!name && genero && !order)
    {
      const peliculas = await Pelicula.findAll({
        attributes: ["titulo", "imagen","createdAt"],
        where:{
          generoId: genero,
      }
      });
      return res.json(peliculas);
    } 
    if (name && !genero && !order)
    {
      const peliculas = await Pelicula.findAll({
        attributes: ["titulo", "imagen","createdAt"],
        where:{
          titulo: name,
      }
      });
      return res.json(peliculas);
    }  
    
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const postPelicula = async (req, res) => {
  try {
    const nuevaPelicula = await Pelicula.create(req.body);
    res.json({ msg: "Nueva Pelicula agregada" });
  } catch (error) {
    res.json({ error: "Error en la creacion" });
  }
};
const putPelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);

    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } 
    
        await Pelicula.update(req.body, {
        where: {
          id : req.params.id
        },
      });
      res.json({ msg: "Pelicula actualizada" });
    
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};
const deletePelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } else {
      await Pelicula.destroy({
        where: {
          id,
        },
      });
      res.json({ msg: "Pelicula Borrada" });
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const getPeliculaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);

    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } else {
      res.json(pelicula);
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

export {
  getPeliculaById,
  deletePelicula,
  putPelicula,
  postPelicula,
  getPeliculas,
};