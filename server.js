const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const filePath = "submissions.xlsx";

// Initialize the Excel file if it doesn't exist
if (!fs.existsSync(filePath)) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Submissions");

  // Define columns in the Excel sheet
  sheet.columns = [
    { header: "Full Name", key: "fullName", width: 30 },
    { header: "Last Name", key: "lastName", width: 30 },
    { header: "Email", key: "email", width: 30 },
    { header: "Phone Number", key: "phone", width: 15 },
    { header: "Message", key: "message", width: 50 },
    { header: "Timestamp", key: "timestamp", width: 30 },
  ];

  workbook.xlsx.writeFile(filePath).then(() => {
    console.log("Excel file initialized.");
  });
}

// API endpoint to handle form submissions
app.post("/submit", async (req, res) => {
  const { fullName, lastName, email, phone, message } = req.body;

  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet("Submissions");

    // Add a new row to the sheet
    sheet.addRow({
      fullName,
      lastName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    // Save the file
    await workbook.xlsx.writeFile(filePath);

    res.status(201).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error writing to Excel file:", error);
    res.status(500).send("An error occurred while saving the form data.");
  }
});

// Start the server
app.listen(5000, () => {
  console.log("Server is running on http://localhost:3022");
});
