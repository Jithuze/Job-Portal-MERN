const mongoose = require('mongoose')

var schema = mongoose.Schema(
    {
        user_name: { type: String, require: true},
    }
);

var CurrentUserModel = mongoose.model('CurrentUser', schema)

module.exports = CurrentUserModel