import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS c
import connectDB from "./config/db.js";
import houseRoutes from "./routes/houseRoutes.js";
import {notFound, errorHandler} from './middleware/errorMiddleware.js';

dotenv.config();

connectDB();


const port = process.env.PORT || 5000;

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
}));


app.get('/', (req, res) => {
  res.send('API is running');
});

app.use('/houses', houseRoutes);

app.use(notFound);
app.use(errorHandler);



app.listen(port, () => console.log(`server is running on port ${port}`));
