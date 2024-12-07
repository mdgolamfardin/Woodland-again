/* 
  Author: Kelly Prince Rwanyange
  Group: Assorted Donuts
  
  Purpose:
  This script implements a file upload backend using Node.js and Express. It accepts image uploads 
  along with metadata (photographer name, email, description), stores them on the server, and saves 
  the metadata in a JSON file. Static access to uploaded files is also provided.
*/

// Import necessary modules
const express = require("express");
const cors = require("cors");
const ExcelJS = require("exceljs");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

// Create an Express app
const app = express();
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// Define ports
const UPLOAD_PORT = 3001;
const FORM_PORT = 5000;

// File paths
const filePath = "submissions.xlsx"; // Path for Excel file
const uploadsDir = path.join(__dirname, "uploads"); // Directory for file uploads

// Ensure the uploads directory exists
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

// Ensure the Excel file exists
if (!fs.existsSync(filePath)) {
  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet("Submissions");

  // Define columns for the Excel sheet
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

// Multer configuration for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Save files in the uploads directory
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`); // Unique filename to avoid collisions
  },
});
const upload = multer({ storage });

// API Endpoint: File Upload
app.post("/upload", upload.single("file"), (req, res) => {
  const { photographer, email, description } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const uploadData = {
    filePath: file.path,
    fileName: file.originalname,
    photographer,
    email,
    description,
    uploadTime: new Date().toISOString(),
  };

  // Save metadata to a JSON file
  const dataPath = path.join(uploadsDir, "uploads.json");
  let data = [];
  if (fs.existsSync(dataPath)) {
    data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }
  data.push(uploadData);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: "File uploaded successfully", data: uploadData });
});

// API Endpoint: Serve uploaded files statically
app.use("/uploads", express.static(uploadsDir));

// API Endpoint: Form Submission
app.post("/submit", async (req, res) => {
  const { fullName, lastName, email, phone, message } = req.body;

  try {
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);

    const sheet = workbook.getWorksheet("Submissions");

    // Add a new row with form data and a timestamp
    sheet.addRow({
      fullName,
      lastName,
      email,
      phone,
      message,
      timestamp: new Date().toISOString(),
    });

    await workbook.xlsx.writeFile(filePath); // Save the updated Excel file

    res.status(201).send("Form submitted successfully!");
  } catch (error) {
    console.error("Error writing to Excel file:", error);
    res.status(500).send("An error occurred while saving the form data.");
  }
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));

});


app.use(express.static(path.join(__dirname, "../public", "index.html")));

// Catch-all handler for any requests that don't match defined routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

// Start the server
const PORT = 3022;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

