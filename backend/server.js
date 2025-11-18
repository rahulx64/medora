import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';

dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
  res.send('Hello from the backen jhjh d server!');
});

app.listen(PORT, () => {
  console.log(`Server is running on ooo port ${PORT}`);
});

