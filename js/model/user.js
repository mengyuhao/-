var mongoose = require("../mong/mongo.js"),
Schema = mongoose.Schema;
var UserSchema = new Schema({
		username : {type: String },
		passwrd: {type: String},
		tel: {type: String}
	});
module.exports = mongoose.model("User",UserSchema)