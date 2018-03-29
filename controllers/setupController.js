var Todos = require('../models/todoModel');

module.exports = function(app) {
	app.get('/api/setupTodos', function(req, res) {
		//seed database
		var starterTodos = [
		{
			username: 'henrybarnacle',
			todo: 'Buy Milk',
			isDone: false,
			hasAttachment: false
		},
		{
			username: 'henrybarnacle',
			todo: 'Buy bread',
			isDone: false,
			hasAttachment: false
		},
		{
			username: 'henrybarnacle',
			todo: 'Buy cheese',
			isDone: false,
			hasAttachment: false
		}
		];
		Todos.create(starterTodos, function(err, results) {
			res.send(results);
		});
	});
}