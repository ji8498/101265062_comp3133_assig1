const Hotel = require( './models/Hotels' );
const User = require( './models/User' );
const Booking = require( './models/Booking' );


exports.resolvers = {
    Query: {
        getHotel: async ( parent, args ) => {
            return await Hotel.find({});
        },
        getUser: async ( parent, args, { User, sub} ) => {
            return await User.findById( sub );
        },

        getBooking: async ( parent, args, {User}) => {
            return await Booking.find({username: User.username});
        },

        getHotelByHotel_Name: (parent, args) => Hotel.findById(args.hotel_name),

        getHotelByCity: async ( parent, args ) => {
            return await Hotel.find( { city: args.city } );
        },
        
        
        



    },
    Mutation: {
        addHotel: async ( parent, args ) => {
            let newHotel = new Hotel({
                hotel_name: args.hotel_name,
                city: args.city,
                street: args.street,
                price: args.price,
                postal_code: args.postal_code,
                username: args.username,
                email: args.email
                
            });
            return await newHotel.save();
        },
        addUser: async ( parent, args ) => {
            let newUser = new User({
                username: args.username,
                password: args.password,
                firstname: args.firstname,
                lastname: args.lastname,
                email: args.email,
                type: args.type,
                               

            });
            return await newUser.save();
        },
        addBooking: async ( parent, args ) => {
            let newBooking = new Booking({
                hotel_id: args.hotel_id,
                booking_date: args.booking_date,
                booking_start: args.booking_start,
                booking_end: args.booking_end,
                user_id: args.user_id
                
            });
            return await newBooking.save();
        },
    }
}