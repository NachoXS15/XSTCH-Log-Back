
const mongoose = require('mongoose')
const {Schema} = mongoose;

const logSchema = new Schema({
    id: Number,
    name: String,
    details: String,
    price: Number,
    date: String,
    status: String,
    pay: String
})

const Log = mongoose.model("Log", logSchema);

module.exports = { Log }
