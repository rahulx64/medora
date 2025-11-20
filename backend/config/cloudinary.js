import {v2 } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

const cennectCloudinary =async () => {
  v2.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });
};

export default cennectCloudinary;

