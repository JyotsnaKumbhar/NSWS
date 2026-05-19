const enquiryModel = require("../../models/enquiry.model");

// INSERT
const enquiryInsert = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;

    const enquiry = new enquiryModel({
      name,
      email,
      phone,
      message,
    });

    await enquiry.save();

    res.send({
      status: 1,
      message: "Enquiry Saved Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(500).send({
      status: 0,
      message: "Error while saving enquiry",
      error: error.message,
    });
  }
};

module.exports = enquiryInsert;

// VIEW
let enquiryList = async (req, res) => {
  let enquiry = await enquiryModel.find();

  res.send({
    status: 1,
    enquiryList: enquiry,
  });
};

// DELETE
let enquiryDelete = async (req, res) => {
  let enquiryId = req.params.id;

  await enquiryModel.deleteOne({ _id: enquiryId });

  res.send({
    status: 1,
    message: "Enquiry Deleted Successfully",
  });
};

// SINGLE DATA FOR EDIT
let enquirySingleRow = async (req, res) => {
  let enquiryId = req.params.id;

  let enquiry = await enquiryModel.findOne({ _id: enquiryId });

  res.send({
    status: 1,
    enquiry,
  });
};

// UPDATE
let enquiryUpdate = async (req, res) => {
  let enquiryId = req.params.id;

  let { name, email, phone, message } = req.body;

  let updateObj = {
    name,
    email,
    phone,
    message,
  };

  await enquiryModel.updateOne(
    { _id: enquiryId },
    {
      $set: updateObj,
    }
  );

  res.send({
    status: 1,
    message: "Enquiry Updated Successfully",
  });
};

module.exports = {
  enquiryInsert,
  enquiryList,
  enquiryDelete,
  enquirySingleRow,
  enquiryUpdate,
};