const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const productSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    phone: {
        type: Number,
    },
    userType: {
        type: String,
        default: 'customer',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});




const Product = model('Product', productSchema);

module.exports = Product;