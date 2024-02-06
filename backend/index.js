import express from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import { Book } from "./models/bookModel.js";
import cors from 'cors';
import bookRoute from './routes/booksRoute.js'


const app = express();

// middlware for parsing request body
app.use(express.json());

// middleware for handling CORS POLICY
// OPtion 1: Allow ALl Origins ith Default of cors(*)
app.use(cors());

// Option-2: Allow custom Origins

app.get("/", (req, res) => {
  console.log(req);
  return res.status(234).send("Hello World!");
});

app.use('/books',bookRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log(`App connected to database.`);
    app.listen(PORT, () => {
      console.log(`App is listening to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
