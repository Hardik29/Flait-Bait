const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3
    },
    mob : {
        type: String,
        required: true,
        trim: true,
        minlength: 10
    },
    mail: {
        type: String,
        required: true,
        tirm: true
    },
    timeSlot: {
        type: String,
        required: false
    }, 
    salary : {
        type: Number,
        required: true
    }, 
    description: {
        type: String,
        required: false
    },
    occupation: {
        type: String,
        required: true
    }
}, 
{
    timestamps: true
});

const Worker = mongoose.model('Worker', workerSchema);
module.exports = Worker;