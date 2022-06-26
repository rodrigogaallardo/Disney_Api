import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config ({path: ".env"});

const emailBienvenida = async(datos) =>{
    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD
        }
      });

      await transport.sendMail({
        from: '"Diney API" <disneyApi@example.com>', // sender address
        to: datos.email, // list of receivers
        subject: "Bienvenida a Disney Api", // Subject line
        text: "Gracias por registrarse", // plain text body
        html: `<h1>Bienvenido <span>${datos.nombre}</span></h1>
                <p>Gracias por registrarte</p>
        `,
      });
}

export {emailBienvenida }