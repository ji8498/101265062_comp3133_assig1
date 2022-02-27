const mongoose = require('mongoose');
const User= require('./User');
const Hotel= require('./Hotels')
const BookingSchema = new mongoose.Schema({
  
  
  hotel_id: {
    type: {Hotel},
    trim: true,
    required: true,
    unique: true
  },
   
  
  booking_date: {
    type: Date,
    default: Date.now,
    alias: 'Todays Date'
    
  },
  booking_start: {
    type: Date,
    default: Date.now,
    alias: 'Start Date'
   
  },
  
  booking_end: {
    type: Date,
    required: true,
    alias: 'End Date'
   
  },
  
  user_id: {
    type: {User},
    required: true,
    trim: true,
    unique:true
   
  },
 
  
  
});

const Booking = mongoose.model("Booking", BookingSchema);
module.exports = Booking;