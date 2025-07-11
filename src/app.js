import express from "express";
import dbConnectionFnc from "./DB/dbConnection.js";
import dotenv from 'dotenv';
import cors from 'cors';
import router from "./Controllers/User.controller.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/users', router);


const PORT = process.env.PORT;

export const bootstrapFnc = async () => {
  dbConnectionFnc();
  app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
  }).on("error", (err) => {
    console.log(`Error: ${err}`);
  })
}
