const { Schema, model } = require('mongoose')

const UserModel = new Schema({
	Name: {
		type: String, 
		required: true
	},
	email: {
		type: String, 
		required: true
	},
	password: {
		type: String, 
		required: true
	},
})

module.exports = model('User', UserModel)









