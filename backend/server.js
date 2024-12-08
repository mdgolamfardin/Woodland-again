const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const fs = require("fs");
const path = require("path");
const bodyParser = require("body-parser"); // Import body-parser

const app = express();

// Enable CORS for your frontend domain
app.use(
  cors({
    origin: "http://localhost:3022", // Adjust this for your production domain
  })
);

// Middleware to parse JSON and URL-encoded request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/formSubmit", async (req, res) => {
  const filePath = path.join(__dirname, "../src/data/messages.xlsx");
  console.log("Excel File Path:", filePath);

  // Initialize the Excel file if it doesn't exist
  if (!fs.existsSync(filePath)) {
    console.log("Initializing new Excel file...");
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Submissions");
    sheet.columns = [
      { header: "Full Name", key: "fullName", width: 30 },
      { header: "Last Name", key: "lastName", width: 30 },
      { header: "Email", key: "email", width: 30 },
      { header: "Phone Number", key: "phone", width: 15 },
      { header: "Message", key: "message", width: 50 },
      { header: "Timestamp", key: "timestamp", width: 30 },
    ];
    try {
      await workbook.xlsx.writeFile(filePath);
      console.log("Excel file initialized successfully.");
    } catch (error) {
      console.error("Error initializing Excel file:", error);
      return res.status(500).send("Error initializing Excel file.");
    }
  }

  console.log("Received form data:", req.body);

  try {
    // Read the existing Excel file
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet("Submissions");
    if (!sheet) {
      console.error("Worksheet 'Submissions' not found.");
      return res.status(500).send("Worksheet not found.");
    }

    // Add a new row to the sheet
    sheet.addRow([
      req.body.fullName,
      req.body.lastName,
      req.body.email,
      req.body.phone,
      req.body.message,
      new Date().toISOString(),
    ]);

    // Save the updated Excel file
    await workbook.xlsx.writeFile(filePath);
    console.log("Excel file successfully updated.");

    res.status(201).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error writing to Excel file:", error);
    res.status(500).send("An error occurred while saving the form data.");
  }
});

// Simple test API endpoint
app.get("/api/greeting", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

// Start the server
const PORT = 5234;
app.listen(PORT, () => {
  console.log(`Backend server is running on port ${PORT}`);
});