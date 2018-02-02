var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fieldSchema = new Schema({
	name: String,		
	email: String,
	number: String                   
});

mongoose.model('Field', fieldSchema);