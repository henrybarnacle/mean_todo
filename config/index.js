var configValues = require('./config');

module.exports = {
	getDbConnectionString: function() {
		return 'mongodb://' + configValues.uname + ':' + configValues.pwd + '@ds127589.mlab.com:27589/nodetodosample';
		
	}
}