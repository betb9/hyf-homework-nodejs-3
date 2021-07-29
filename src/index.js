const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.get('/users', ((req, res) => {
	res.send([]);
}));
app.post('/user', ((req, res) => {
	res.send({ id: 0 });
}));

app.listen(port);
