const mongoose = require( 'mongoose' );

const UserSchema = new mongoose.Schema( {
  username: {
    type: String,
    required: [true, 'Create your username'],
    trim: true,
    unique: true,
    lowercase: true
  },
  firstname:{
    type: String,
    required:[true, 'Your first name']
  },
  lastname:{
    type: String,
    required: [true, 'Your Last name']
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate: function (pass) {
      var Regex = /^[A-Za-z0-9~#$%_]+$/;
      return Regex.test(pass);
    }
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Duplicate Email Not allowed"],
    trim: true,
    
  },
  type: {
    type: String,
    required: [true,"Determine credentials"],
    enum : ['user', 'admin'],
    lowercase: true
  }
  
} );

const User = mongoose.model( "User", UserSchema );
module.exports = User;