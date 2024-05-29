
import express from 'express';
import bodyParser from 'body-parser';
import connectDB from './src/config/db.js';
import authRoutes from './src/routes/auth.js';

const app = express();
const port = 3004;


app.use(bodyParser.json());


app.use('/auth', authRoutes);


const startServer = async () => {
  await connectDB();
  app.listen(port, () => {
    console.log(`Auth service listening at http://localhost:${port}`);
  });
};

startServer();
