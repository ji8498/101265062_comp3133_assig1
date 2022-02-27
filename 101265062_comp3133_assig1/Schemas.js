const { gql } = require('apollo-server-express');


exports.typeDefs = gql `


    type User {
        id: ID
        username: String!
        firstname:String!
        lastname: String!
        password: String!
        email: String!
        
      }
    
      

      type Booking{
        booking_date: Date!
        booking_start:Date!
        booking_end:Date!
        user_id: String!
        hotel_id: String!
    }

   type Hotel {
     id: ID!
     hotel_name: String!
     description: String!
     street: String!
     city: String!
     postal_code: String!
     price: Float!
     email: String!
     username: String!
     
   }
   
  

   type Query {
     getHotel: [Hotel]
     getHotelByHotel_Name(hotel_name: String!):[Hotel]
     getHotelByCity(city: String!): [Hotel]
     getUser: [User]
     getBooking:[Booking]
     
    
   }
   scalar Date
   type Mutation {
  
     addHotel(
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Float!
        email: String!
        username:Int!
        ) :Hotel
        
        addUser(
         username: String!
         password: String!
         email: String!
         firstname:String!
         lastname:String!
         type: String!
          ):User     
        
       addBooking(
         booking_date: Date!
         booking_start:Date!
         booking_end: Date!
         user_id: Int!
         userName: String!
         hotel_id: Int!
       ):Booking
      
      
     
  
   }
  

 
`