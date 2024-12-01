const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = 3001; // Or use another available port if this clashes

// Middleware for JSON parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require("cors")());

// Setup Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = path.join(__dirname, "uploads");
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath, { recursive: true });
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Endpoint to handle file upload and metadata
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

  // Save the data to a JSON file (you can replace this with a database)
  const dataPath = path.join(__dirname, "uploads", "uploads.json");
  let data = [];
  if (fs.existsSync(dataPath)) {
    data = JSON.parse(fs.readFileSync(dataPath, "utf-8"));
  }
  data.push(uploadData);
  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));

  res.status(200).json({ message: "File uploaded successfully", data: uploadData });
});

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
