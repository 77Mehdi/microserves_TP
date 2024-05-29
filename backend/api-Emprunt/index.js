
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import loanRoutes from './routes/EmpruntRout.js';

const app = express();
const port = 3003;

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/emprunt', loanRoutes);

// Database connection
mongoose.connect("mongodb://127.0.0.1:27017/emprunt")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });



app.listen(port, () => {
  console.log(`Emprunt service listening at http://localhost:${port}`);
});
