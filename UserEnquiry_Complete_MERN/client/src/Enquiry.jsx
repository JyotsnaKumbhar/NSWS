import { useState, useEffect } from "react";

import {
  Button,
  Card,
  Label,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  TextInput,
  Textarea,
} from "flowbite-react";

import axios from "axios";

function Enquiry() {
  // Form Object State
  const [formData, setFormData] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Table Data
  const [enquiryList, setEnquiryList] = useState([]);

  // Edit Index
  const [editIndex, setEditIndex] = useState("");

  let getEnquiryData = () => {
    axios
      .get("http://localhost:5173/api/web/enquiry/view")
      .then((res) => {
        setEnquiryList(res.data.enquiryList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getEnquiryData();
  }, []);
  // Handle Input Change
  function getValue(e) {
    let inputName = e.target.name;
    let inputValue = e.target.value;

    let oldData = { ...formData };

    oldData[inputName] = inputValue;

    setFormData(oldData);
  }

  // Save Enquiry
  let saveEnquiry = (e) => {
    e.preventDefault();

    // INSERT
    if (editIndex === "") {
      axios
        .post("http://localhost:5173/api/web/enquiry/insert", formData)
        .then((res) => {
          console.log(res.data);

          // Refresh Table Data
          getEnquiryData();

          // Reset Form
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        });
    }

    // UPDATE
    else {
      axios
        .put(
          `http://localhost:5173/api/web/enquiry/update/${editIndex}`,
          formData,
        )
        .then((res) => {
          console.log(res.data);

          getEnquiryData();

          setEditIndex("");

          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        });
    }
  };

  // Delete
  let deleteRow = (id) => {
    axios
      .delete(`http://localhost:5173/api/web/enquiry/delete/${id}`)
      .then((res) => {
        console.log(res.data);

        getEnquiryData();
      });
  };

  // Edit
  let editRow = (id) => {
    axios
      .get(`http://localhost:5173/api/web/enquiry/single/${id}`)
      .then((res) => {
        let data = res.data.enquiry;

        setFormData({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        });

        setEditIndex(id);
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      {/* Heading */}
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          User Enquiry
        </h1>
      </div>

      {/* Main Layout */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[350px_auto] items-start">
        {/* Form Section */}
        <Card className="shadow-xl border-0 rounded-2xl h-full bg-gray-200">
          <h2 className="text-2xl font-bold text-gray-700">
            {editIndex !== "" ? "Update Enquiry" : "Enquiry Form"}
          </h2>

          <form className="flex flex-col gap-2" onSubmit={saveEnquiry}>
            {/* Name */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name">
                  Your Name :{" "}
                </Label>
              </div>

              <TextInput
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                shadow
                value={formData.name}
                onChange={getValue}
              />
            </div>

            {/* Email */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="email" value="Your Email">
                  Your Email :{" "}
                </Label>
              </div>

              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                shadow
                value={formData.email}
                onChange={getValue}
              />
            </div>

            {/* Phone */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="phone" value="Phone Number">
                  Phone Number :{" "}
                </Label>
              </div>

              <TextInput
                id="phone"
                name="phone"
                type="text"
                placeholder="Enter phone number"
                required
                shadow
                value={formData.phone}
                onChange={getValue}
              />
            </div>

            {/* Message */}
            <div>
              <div className="mb-2 block">
                <Label htmlFor="message" value="Your Message">
                  Your Message :{" "}
                </Label>
              </div>

              <Textarea
                id="message"
                name="message"
                placeholder="Write your message..."
                rows={5}
                required
                value={formData.message}
                onChange={getValue}
              />
            </div>

            {/* Button */}
            <Button type="submit" className="w-full bg-blue-500">
              {editIndex !== "" ? "Update Enquiry" : "Save Enquiry"}
            </Button>
          </form>
        </Card>

        {/* Table Section */}
        <Card className="shadow-xl border-0 rounded-2xl h-full bg-gray-200">
          <div className="overflow-x-auto mt-4 h-full">
            <Table hoverable striped>
              <TableHead>
                <TableRow>
                  <TableHeadCell>Sr No.</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>Edit</TableHeadCell>
                  <TableHeadCell>Delete</TableHeadCell>
                </TableRow>
              </TableHead>

              <TableBody className="divide-y">
                {enquiryList?.length >= 1 ? (
                  enquiryList.map((item, index) => {
                    return (
                      <TableRow key={index}>
                        <TableCell>{index + 1}</TableCell>

                        <TableCell>{item.name}</TableCell>

                        <TableCell>{item.email}</TableCell>

                        <TableCell>{item.phone}</TableCell>

                        <TableCell>{item.message}</TableCell>

                        <TableCell>
                          <Button
                            color="warning"
                            onClick={() => editRow(item._id)}
                          >
                            Edit
                          </Button>
                        </TableCell>

                        <TableCell>
                          <Button
                            color="failure"
                            onClick={() => deleteRow(item._id)}
                          >
                            Delete
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })
                ) : (
                  <TableRow>
                    <TableCell colSpan={7} className="text-center py-5">
                      No Enquiry Found
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Enquiry;
