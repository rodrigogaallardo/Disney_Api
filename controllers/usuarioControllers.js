import {check, validationResult} from "express-validator"
import { Usuario } from "../models/index.js"
import {emailBienvenida} from "../helpers/email.js"
import { generarJwt } from "../helpers/token.js"; 

const registro = async (req,res) =>{
    const {nombre, email,password} = req.body
    // validar los campos
    await check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio").run(req)
    
    await check("email")
    .isEmail()
    .withMessage("No es un formato de email valido")
    .run(req)

    await check("password")
    .isLength({min:4})
    .withMessage("El password tiene que tener al menos 4 caracteres")
    .run(req)

    let resultados = validationResult(req);

    if (!resultados.isEmpty()) {
        return res.json (resultados.array())
    }

    //Verificar que no exista
    const usuario = await Usuario.findOne({
        where: {
            email
        }
    })

    if (usuario) {
        return res.json({msg: "El usuario ya esta registrado"})
    }
    //Crear Usuario
    const nuevoUsuario = await  Usuario.create({

        nombre,
        email,
        password,
    })
    emailBienvenida({nombre:nuevoUsuario.nombre, email:nuevoUsuario.email})
    res.json({
    resultado:"Usuario Registrado", 
    msg:"Te enviamos un mail de bienvenida"
    })
};

const login = async (req,res) =>{
    const {email,password} = req.body

    await check("email")
    .isEmail()
    .withMessage("No es un formato de email valido")
    .run(req)

    await check("password")
    .notEmpty()
    .withMessage("El password no puede estar vacio")
    .run(req)

    let resultados = validationResult(req);

    if (!resultados.isEmpty()) {
        return res.json (resultados.array())
    }
    //Verificar que no exista
    const usuario = await Usuario.findOne({
        where: {
            email
        }
    })

    if (!usuario) {
        return res.json({msg: "El usuario no esta registrado"})
    }
    //validar el password
    if (!usuario.validarPassword(password)) {
        return res.json({msg: "Password Incorrecto"})
    }

    const token = generarJwt(usuario.id, usuario.nombre)
    return res.json ({token})
};

export {registro, login};