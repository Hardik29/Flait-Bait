const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    mob: {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    mail: {
        type: String,
        required: true,
        tirm: true
    }
}, 
{
    timestamps: true,
});

const Customer = mongoose.model('Customer', customerSchema);
module.exports = Customer;