

import  bookRoutes from './routes/livreRoute.js'
import express from "express"
import bodyParser from 'body-parser'
import mongoose from 'mongoose';

const app = express();
const port = 3000;


app.use(bodyParser.json());

app.use('/books', bookRoutes);

mongoose.connect("mongodb://127.0.0.1:27017/Livre")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.listen(port, () => {
  console.log(`Livre service listening at http://localhost:${port}`);
});
