const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const dateFormat = require('../utils/dateFormat');

const companySchema = new Schema({
    companyName: {
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
        required: true,
    },
    employees: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
        }
    ],
    customers: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Customer',
        },
    ],
    vendors: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Vendor',
        },
    ],
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Products',
        }
    ],
    purchaseOrders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'PurchaseOrders',
        },
    ],
    userType: {
        type: String,
        default: 'company',
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: (timestamp) => dateFormat(timestamp),
    },
});

companySchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

companySchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


const User = model('Company', companySchema);

module.exports = Company;
