const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const categorieSchema= new Schema({
    name: {
        type: String, 
        required:[true,'Name required'], 
        maxlength: 50,
        minlength:3,
        unique:true
    }, 
    description: {
        type:String,
        required:true ,
        maxlength: 250,
        minlength:10,
    },
    status: {
        type: Boolean, 
        default:true
    }
});

module.exports = mongoose.model('categorie', categorieSchema);