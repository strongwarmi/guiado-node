//exportar express y path
var express = require('express');
var path = require('path');
//inicializar express
var app = express();
//usa esa url para esos archivos
//dirname-> directorio del proyecto
app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));

//declarar endpoint
app.get('/', (req, res) => {
    //res.send('Hello world')
    res.sendFile(__dirname + '/index.html' );
});
//iniciar servidor
app.listen(8080);
