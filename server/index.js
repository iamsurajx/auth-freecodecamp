require("dotenv").config();
const express = require("express");
const { PORT } = process.env;
const cors = require('cors');

const app = express();
const connectDB = require("./db/db.config");
const authRoute = require("./Routes/AuthRoute");

//setting the corse origin 
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

//connecting DB;
connectDB();

app.use("/", authRoute);

app.listen(PORT, () => {
  console.warn(`SERVER Live http://localhost:${PORT}`)
})