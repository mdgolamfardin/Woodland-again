/* 
  Author: Kelly Prince Rwanyange
  Group: Assorted Donuts
  
  Purpose:
  This script implements a file upload backend using Node.js and Express. It accepts image uploads 
  along with metadata (photographer name, email, description), stores them on the server, and saves 
  the metadata in a JSON file. Static access to uploaded files is also provided.
*/

// Required Libraries
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3001; // Default port, change if needed

// Middleware Setup
app.use(express.json()); // Parse JSON requests
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data
app.use(require("cors")()); // Enable Cross-Origin Resource Sharing (CORS)

// Multer Configuration for File Uploads
/**
 * Storage configuration:
 * - Destination: Ensures an "uploads" directory exists for storing files.
 * - Filename: Appends a timestamp and unique ID to avoid name collisions.
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true }); // Ensure directory exists
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

// Multer instance for handling file uploads
const upload = multer({ storage });

// API Endpoint: File Upload
/**
 * POST /upload
 * 
 * Purpose:
 * Handles file uploads and accompanying metadata (photographer name, email, description).
 * 
 * Request:
 * - File: Attached via multipart/form-data under the key "file".
 * - Metadata: JSON object containing "photographer", "email", and "description".
 * 
 * Response:
 * - 200: File uploaded successfully with details returned.
 * - 400: No file uploaded or invalid request.
 */
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
  const dataPath = path.join(__dirname, "uploads", "uploads.json");
  let data = [];
  if (fs.existsSync(dataPath)) {
    data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }
  data.push(uploadData);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: "File uploaded successfully", data: uploadData });
});

// Serve Static Files
/**
 * Serves files from the "uploads" directory statically.
 * 
 * Purpose:
 * Provides a way to access uploaded files through URLs.
 */
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start the Server
/**
 * Starts the Express server on the specified port.
 * 
 * Purpose:
 * Makes the backend available for file uploads and metadata handling.
 */
app.listen(PORT, () => {
  console.log(`Server running on  http://ugdev.cs.smu.ca/~group25F/uploads:${PORT}`);
});
