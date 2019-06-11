const express = require('express');
const app = express();

app.get('/', function(req, res) {
	//res.send(`Hola Prueba`);
	let salida = { nombre: 'Gustavo Moreno', edad: 28, url: req.url };
	res.send(salida);
});

app.get('/data', function(req, res) {
	res.send(`salida data`);
});

app.listen(4545, () => {
	console.log(`Running Server on Port 4545`);
});
