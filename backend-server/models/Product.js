const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    categorie: {
        type: Schema.ObjectId,
        ref: 'categorie',
        required: [true, 'Categorie required']
    },
    id: {
        type: String,
        required: [true, 'Id required'],
        maxlength: 50,
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name required'],
        maxlength: 50,
        minlength: 5,
    },
    shortDescription: {
        type: String,
        required: true,
        maxlength: 120,
        minlength: 7,
    },
    description: {
        type: String,
        maxlength: 250,
        minlength: 7,
    },
    price: {
        type: String,
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        default: 0,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
    createedAt: {
        type: Date,
        default: Date.now,
    },
})

module.exports = mongoose.model('Product', productSchema);
