var mongoose = require("mongoose");

var schema = mongoose.Schema;

var userSchema = new schema({
	name: {
		type: String,
		required: true
	},
    email: {
        type: String,
        required: true
    },
    cellno:{
        type: String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    isDeleted:{
        type: Boolean,
    }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);