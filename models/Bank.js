import mongoose from 'mongoose';
const { Schema } = mongoose;

const Bank = new Schema({
    nameBank:{
        type: String,
        required:true
    },
    nomorRekening:{
        type: String,
        required:true
    },
    name:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model('Bank',Bank)