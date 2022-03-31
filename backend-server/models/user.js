const mongoose = require('mongoose');
const { Schema } = mongoose;

// var validateEmail = function(email) {
//     var re = /;
//     return re.test(email)
// };

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxlength: 100
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        maxlength: 100,
        trim: true,
        unique: true,
        match: [/.+\@.+\..+/, 'Invalid email']
        // validate: [validateEmail, 'Please use a valid email address],
        // match: 
    },
    password: {
        type: String,
        required: true,
        maxlength: 100,
        minlength: 6
    },
    rol: {
        type: String,
        required: true,
        enum: ['Dev', 'Admin']
    },
    active: {
        type: Number,
        default: 1,
    },
    createedAt: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User
