import express from 'express';
import dotenv from 'dotenv';
import personajeRoutes from './routes/personajeRoutes.js'; //creado por mi, si es una libreria no;
import  peliculaRoutes  from './routes/peliculaRoutes.js';
import  generoRoutes  from './routes/generoRoutes.js';
import  usuarioRoutes  from './routes/usuarioRoutes.js';
import db from './config/db.js';
dotenv.config({path:".env"})
const app = express();

//conexion a la base de atos
try {
    await db.authenticate();
    await db.sync() //actualiza las tablas
    console.log('Conectado a la base datos!');
  } catch (error) {
    console.error('Error de conexion!', error);
  }
//midlewares
app.use(express.urlencoded ({extended: true}))

//rutas
app.use('/api/v1/characters',personajeRoutes); //convension de rest api
app.use('/api/v1/movies',peliculaRoutes); 
app.use('/api/v1/generos',generoRoutes); 
app.use('/api/v1/auth',usuarioRoutes);

app.listen(process.env.PORT,() => console.log("server funcionando"));