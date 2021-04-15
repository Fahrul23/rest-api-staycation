import mongoose from 'mongoose';
const { Schema } = mongoose;

const Image = new Schema({
    imageUrl:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Image',Image)