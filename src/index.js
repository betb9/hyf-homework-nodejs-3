const express = require('express');
const app = express();
const port = 3000;

const users = [];

app.get('/', (req, res) => {
	res.send('Hello World!');
});
app.get('/users', ((req, res) => {
	res.send(users);
}));
app.get('/user/:id', ((req, res) => {
	res.send({id:0});
}));
app.post('/user', ((req, res) => {
	users.push({id: users.length});
	res.send(users[users.length-1]);
}));

app.listen(port);
