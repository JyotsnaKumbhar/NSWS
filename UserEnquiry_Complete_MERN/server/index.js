const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

require("dotenv").config();

const enquiryRoute = require("./App/routes/web/EnquiryRoute");

const app = express();
app.use(cors());
app.use(express.json());


app.use("/api/web/enquiry", enquiryRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected");

    app.listen(process.env.PORT, () => {
      console.log("Server running !!", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });