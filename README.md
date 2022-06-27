<h1>Challenger Disney Api</h1>

Requisitos
        -node   
        -msql
        -workbench
        -postman
        -Crear base de datos en workbench, se sugiere el nombre de "disney_api".

Aplicaciones
    instalar todas las dependecias con npm i    
    En el archivo .env puedo cambiar sus variables de entorno , para este primer punto cambiar: PORT, DB_name, DB_USER, DB_PASSWORD, DB_HOST
    Ejecutar: npm run db:importar. Con este comando poblaremos de forma ordenada los campos genero, peliculas y personajes. Que dentro del arhivo seeders.js, cuenta con valores por defecto. (En la base de datos encontrara 4 generos, 5 peliculas y 4 personajes). Luego de que se pueblen dichos campos la conexion con la base de datos se cerrara.
    Para dar inicio al proyecto ejecutar: npm run start. De esta manera no solo se dara inicio al proyecto sino que tambien se creara la ultima tabla "usuarios", donde se crear los registros a traves del post de registro. 

 Puntos del Challengers

 Autenticación de Usuarios: En postman con el metodo post en el endpoint /auth/register crearemos un usuario (nombre, mail y password). Luego de haber pasado las validaciones, creara el usuario y nos dara un mensaje de bienvenida junto con el envio de mail. En este caso utilice Mailtrap, dentro de la carpeta helpers en el archivo email.js pueden cambiar a otro servidor de mail, dentro del archivo .env pueden cambiar las varibles de entorno (EMAIL_HOST, EMAIL_PORT,EMAIL_USER,EMAIL_PASSWORD).

 Con el usurio creado, en postman con el metodo post en el endpoint /auth/login le enviaremos por body(formulario) el mail y su contraseña. Una vez que haya pasado todas las verificaciones (mail invalido o mal ingresado, usuario no existente, contraseña erronea o vacia), nos genera un token que es necesario para los siguientes puntos. 


