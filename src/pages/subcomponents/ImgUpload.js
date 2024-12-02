/* 
  Author: Kelly Prince Rwanyange
  Group: Assorted Donuts
  
  Purpose:
  This React component allows users to upload an image file along with metadata such as
  the photographer's name, email, and a description. The uploaded file and metadata are sent 
  to a server endpoint for storage.
*/

import { FileInput } from "flowbite-react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

/**
 * ImgUpload Component
 * 
 * Purpose:
 * A functional React component that provides a user interface for image upload and metadata entry.
 * 
 * @returns {JSX.Element} The rendered component.
 */
export function ImgUpload() {
  // Local state for the selected file and form data
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    photographer: "",
    email: "",
    description: "",
  });

  /**
   * Updates the selected file in state.
   * 
   * @param {Event} event - The change event triggered by the file input.
   */
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  /**
   * Updates form data state based on user input.
   * 
   * @param {Event} e - The change event triggered by input fields.
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  /**
 * External API Reference:
 * - API Endpoint: http://ugdev.cs.smu.ca/~group25F/uploads
 * - Purpose: Upload files and metadata to the server.
 * - Method: POST
 * - Required Headers: Content-Type: multipart/form-data
 * - Parameters:
 *   - file: The image file to be uploaded.
 *   - photographer: The name of the photographer.
 *   - email: The email address of the photographer.
 *   - description: A short description of the file.
 */

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file!");
      return;
    }

    const data = new FormData();
    data.append("file", file);
    data.append("photographer", formData.photographer);
    data.append("email", formData.email);
    data.append("description", formData.description);

    try {
      const response = await axios.post(
        "http://ugdev.cs.smu.ca/~group25F/uploads",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      alert("File uploaded successfully!");
      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert("Error uploading file");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Form.Label
        htmlFor="dropzone-file"
        className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
      >
        <div className="flex flex-col items-center justify-center pb-6 pt-5">
          <svg
            className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
            />
          </svg>
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input
          id="dropzone-file"
          type="file"
          className="hidden"
          onChange={handleFileChange}
        />
      </Form.Label>

      {file && (
        <div className="mt-4">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="mb-4 max-w-sm rounded-lg"
          />
          <Form.Group className="mb-3">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Photographer Name:</Form.Label>
            <Form.Control
              type="text"
              name="photographer"
              placeholder="Photographer's Name"
              value={formData.photographer}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Photographer's Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <button onClick={handleSubmit} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default ImgUpload;
