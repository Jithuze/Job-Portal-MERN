const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        user_name: { type : String, required: true},
        user_password: { type: String, required: true },
        user_role: { type: String, required: true },
    }, {timestamps: true}
);

var UserModel = mongoose.model('User',schema)

module.exports = UserModel