const mongoose = require( 'mongoose' );
const User = require( './User' )


const HotelSchema = new mongoose.Schema( {
  hotel_name: {
    type: String,
    required: [true, 'Title required'],
  
  },
  city: {
      type: String,
      required: true,
      
    },

  street: {
    type: String,
    required: true,
    
  },

  
  postal_code: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },

  description:{
    type: String,
    required: true,
    maxLength: 700
  },

  price: {
    type: Number,
    required: true,
    min: 0,

  },

  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    
  },

  username: {
    type: { User },
    required: [true, 'Please enter username'],
    unique: [true, 'Aleready In-Use']

  }
} );

const Hotel = mongoose.model( "Hotel", HotelSchema );
module.exports = Hotel;