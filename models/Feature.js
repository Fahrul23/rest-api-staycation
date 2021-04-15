import mongoose from 'mongoose';
const { Schema } = mongoose;

const Feature = new Schema({
    name:{
        type: String,
        required:true
    },
    qty:{
        type: Number,
        required:true
    },
    ImageUrl:{
        type: String,
        required:true
    },
})

module.exports = mongoose.model('Feature',Feature)