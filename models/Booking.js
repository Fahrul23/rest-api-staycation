import mongoose from 'mongoose';
const { Schema } = mongoose;
const {ObjectId} = mongoose.Schema;

const Booking = new Schema({
    bookingStartDate:{
        type: Date,
        required:true
    },
    bookingEndDate:{
        type:Date,
        required:true
    },
    itemId:[{
        _id:{
            type:ObjectId,
            ref:'Item',
            required:true
        },
        price:{
            type:Number,
            required:true
        },
        night:{
            type:Number,
            required:true
        }
    }],
    MemberId:[{
        type:ObjectId,
        ref:'Member'
    }],
    BankId:[{
        type:ObjectId,
        ref:'Bank'
    }],
    profPayment:{
        type:String,
        required:true
    },
    bankFrom:{
        type:String,
        required:true
    },
    accountHolder:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model('Booking',Booking)