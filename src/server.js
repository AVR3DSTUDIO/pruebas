/*app.js */
/*
 @author      Juan Luna
 @description un servidor para la app ipatera y rutas con controllers, conexion a bd
              y modelos, db/DB_avr3ds
 @scripts
              "scripts": {
              "ng": "ng",
              "start": "ng serve ",
              "build": "ng build --prod",
              "test": "ng test",
              "lint": "ng lint",
              "e2e": "ng e2e",
              "server": "nodemon server.js"
    }
 @DB_conexion mongod –dbpath C:/xampp/htdocs/05_NODE/data/dbs/   --port 30032 --auth
 @DB_name     DB_ipatera
 */
// ################################### MODULOS REQUERIDOS -----------------------------------------------------
var express = require('express'); // express
var bodyParser = require('body-parser'); // integrado en express desde la version 4.16.2 para json
var ejs = require('ejs'); // motor plantillas
var cors = require('cors'); // seguridad headers
var path = require("path"); // directorios
// ################################### MODULOS REQUERIDOS ----------------------------------------------------- FIN
//
// ################################### CONFIGURACION EXPRESS --------------------------------------------------
var app = express(); //controlador principal del servidor de node
// rutas estatticas
app.use(express.static(path.join(__dirname, 'app_client')));
// app.use(express.static(path.join(__dirname, 'dist')));
// para body datos y json
app.use(bodyParser.urlencoded({
    extended: false
})); //el servidor aceptará datos por post
app.use(bodyParser.json()); //para que esos datos vayan en formato json
// ################################### CONFIGURACION EXPRESS -------------------------------------------------- FIN
//
// ################################### CONFIGURACION CABECERAS Y CORS -----------------------------------------
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*' )
// 	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method' )
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE' )
// 	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE' )
// 	next()
// })
// ################################### CONFIGURACION CABECERAS Y CORS ----------------------------------------- FIN
//
// ################################### MOTOR PLANTILLAS: ejs --------------------------------------------------
app.set('env', process.env.NODE_ENV || 'development'); //por defecto este será el env
// determinar la cache en produccion o desarrollo
var statusCache = true;
if (app.get('env') === 'development') {
    statusCache = false;
}
console.log(path.join(__dirname, 'app_server', 'views'));

// app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'ejs');
app.engine('html', ejs.renderFile);
app.set('view cache', statusCache);
// console.log(app.get('views'));
// NOTE: You should always cache templates in a production environment.
// Don't leave both of these to `false` in production!
// ################################### MOTOR PLANTILLAS: ejs ------------------------------------------------- FIN
//
// ################################### midlewares cors -------------------------------------------------------
app.use(cors());
// ################################### midlewares cors ------------------------------------------------------- FIN
//
// ################################### RUTAS ----------------------------------------------------------------
// importacion de rutas // development
// var mainRoutes = require("./app_server/routes/main.routes.js");
// var userRoutes = require("./app_server/routes/user.routes.js");
// var loginRoutes = require("./app_server/routes/login.routes.js");
// var contactRoutes = require("./app_server/routes/contact.routes.js");
// #### resolver rutas !!ojo cuidao deben respetar el orden
// app.use('/user', userRoutes);
// app.use('/login', loginRoutes);
// app.use('/contact', contactRoutes);
// app.use('/', mainRoutes);
// RUTAS DE API NGZOO
var user_routes = require('./app_server/routes/user');
var animal_routes = require('./app_server/routes/animal');
// RUTAS DE API NGZOO
// RUTAS DE API NGZOO
app.use('/api', user_routes);
app.use('/api', animal_routes);
// RUTAS DE API NGZOO
// ################################### RUTAS ---------------------------------------------------------------- FIN
//
// ################################### app.listen -----------------------------------------------------------
app.set('port', process.env.PORT || 3002);
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
});
// ################################### app.listen ----------------------------------------------------------- FIN
module.exports = server;