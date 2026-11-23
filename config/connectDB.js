import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        console.log("MONGO_URL available:", !!process.env.MONGO_URL);

        await mongoose.connect(process.env.MONGO_URL);

        console.log("MongoDB Atlas Connected Successfully!");

    } catch (error) {
        console.log("MongoDB Connection Failed:", error.message);
        process.exit(1);
    }
};

export default connectDB;