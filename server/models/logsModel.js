
const mongoose = require('mongoose')
const {Schema} = mongoose;

const logSchema = new Schema({
    id: {
        type: Number,
    },
    name:{
        type: String,

    },
    details:{
        type: String,

    },
    price: {
        type: Number,
        requried: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,

    },
    pay: {
        type: String,
    }
}, {
    timestamps: true
})

const Log = mongoose.model("Log", logSchema);

module.exports = { Log }
