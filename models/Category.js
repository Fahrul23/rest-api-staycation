import mongoose from 'mongoose';
const { Schema } = mongoose;

const category = new Schema({
    name:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Category',category)