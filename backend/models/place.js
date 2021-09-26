const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        primary: true
    },
    address: {
        type: String,
        required:true
    },
    long: {
        type: String,
        required :true
    },
    lat: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Place', placeSchema)