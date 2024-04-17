import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors';
import mongoose from "mongoose";
import dotenv from 'dotenv';
import authRoute from './Routers/auth.js';
import userRoute from './Routers/user.js';
import doctorRoute from './Routers/doctor.js';
import reviewRoute from './Routers/review.js';
import bookingRoute from './Routers/booking.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;

const corsOptions = {
    origin: true,
}
// Set up the default route
app.get("/", (req, res) => {
    res.send('API is working');
});

// Database connection
// mongoose.set('useNewUrlParser', true); // Set useNewUrlParser option
// mongoose.set('useUnifiedTopology', true); // Set useUnifiedTopology option

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('MongoDB database is connected');
    } catch (err) {
        console.error('MongoDB database connection failed:', err.message);
        process.exit(1); // Exit the application if database connection fails
    }
}

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/users', userRoute);
app.use('/api/v1/doctors', doctorRoute);
app.use('/api/v1/reviews', reviewRoute);
app.use('/api/v1/bookings', bookingRoute);

app.listen(port, () => {
    connectDB();
    console.log('Server is running on port ' + port);
});
