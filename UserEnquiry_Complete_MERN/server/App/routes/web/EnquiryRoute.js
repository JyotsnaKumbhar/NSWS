let express = require("express");

const {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirySingleRow,
  enquiryUpdate,
} = require("../../controllers/web/enquiryController");

let enquiryRoute = express.Router();

// INSERT
enquiryRoute.post("/insert", enquiryInsert);

// VIEW ALL
enquiryRoute.get("/view", enquiryList);

// SINGLE DATA
enquiryRoute.get("/single/:id", enquirySingleRow);

// UPDATE
enquiryRoute.put("/update/:id", enquiryUpdate);

// DELETE
enquiryRoute.delete("/delete/:id", enquiryDelete);

module.exports = enquiryRoute;