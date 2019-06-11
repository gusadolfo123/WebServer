// sin express
const http = require('http');

http
	.createServer((req, res) => {
		res.writeHead(200, { 'Content-Type': 'Application/json' });
		let salida = { nombre: 'Gustavo Moreno', edad: 28, url: req.url };
		res.write(JSON.stringify(salida));
		res.end();
	})
	.listen(3132);
