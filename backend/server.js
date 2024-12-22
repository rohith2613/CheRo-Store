import express from "express";
import dotenv from 'dotenv';
import cors from 'cors'; // Import CORS c
import connectDB from "./config/db.js";

dotenv.config();

connectDB();
import houses from './data/houses.js';

const port = process.env.PORT || 5000;

const app = express();

// Enable CORS for all routes
app.use(cors({
  origin: 'http://localhost:5173', // Replace with your frontend's URL
}));


app.get('/', (req, res) => {
  res.send('API is running');
});

app.get('/houses', (req, res) => {
  res.json(houses);
});

app.get('/houses/:id', (req, res) => {
  const id = req.params.id;

  console.log(id);

  const house = houses.find((p) => p.id === parseInt(id));
  res.json(house);
});

app.listen(port, () => console.log(`server is running on port ${port}`));
