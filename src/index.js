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
app.delete('/user/:id', ((req, res) => {
	const userId = parseInt(req.params.id);
	let userExists = false;
	users.forEach((user, index) => {
		if(user.id === userId) {
			userExists = true;
			res.status(202).send(user);
			users.splice(index, 1);
		}
	});
	if(!userExists) res.sendStatus(204);
}));

app.listen(port);
