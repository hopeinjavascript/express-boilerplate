import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import users from "./routes/service.route.js";
import logger from "./middlewares/logger.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("images")); //Ex: http://localhost:5000/default/avatar.jpg

app.use(logger);

app.get("/", (req, res, next) => {
  res.end("<h1>Test route</h1>");
});

app.use(users);

// https://stackoverflow.com/questions/59578927/mongoose-connect-not-throwing-any-error-when-mongodb-is-not-running
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Service:: DB connected");
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
  })
  .catch((error) => {
    console.error({ error });
  });
