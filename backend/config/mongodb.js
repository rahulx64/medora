import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongodbUri = process.env.MONGODB_URI;

    if (!mongodbUri) {
      throw new Error('MONGODB_URI is not defined in environment variables');
    }

    const connection = await mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log(`MongoDB Connected: ${connection.connection.host}`);
    return connection;
  } catch (error) {
    console.error('MongoDB Connection Error:', error.message);
    process.exit(1);
  }
};

export default connectDB;
