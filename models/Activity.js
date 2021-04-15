import mongoose from 'mongoose';
const { Schema } = mongoose;

const Activity = new Schema({
    name:{
        type: String,
        required:true
    },
    type:{
        type: String,
        required:true
    },
    ImageUrl:{
        type: String,
        required:true
    },
    isPopular:{
        type: Boolean
    },
})

module.exports = mongoose.model('Activity',Activity)