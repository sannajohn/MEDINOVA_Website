import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";
import Booking from "../models/BookingSchema.js";
export const getCheckoutSession = async(req, res)=>{
    try {
        
    // get currently booked doctor
    const doctor = await Doctor.findById( req.params.id)
    const user = await User.findById(req.id)

    // create new booking
    const booking = new Booking({
        doctor:doctor.id,
        user: user.id,
        ticketPrice:doctor.ticketPrice,
        session: session.id
    })
    
    await booking.save( )
    
    res.status(200).json( {success: true, message: 'Successfully paid', session})

    }
    catch(err){
        res
          .status(500)
          .json({ success: false, message: "Error creating checkout session" });
    }
};