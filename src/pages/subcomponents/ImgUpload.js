<<<<<<< HEAD
=======
import React, { useState } from "react";
>>>>>>> 4ead167844177b3e7db46c8d3cc21aa2fece3b96
import { FileInput } from "flowbite-react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";

export function ImgUpload() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    date: "",
    location: "",
    photographer: "",
    email: "",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    console.log("Form Submitted:", { file, ...formData });
  };

<<<<<<< HEAD
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
            <Form.Label>Date</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control
              type="text"
              name="location"
              placeholder="Enter location"
              value={formData.location}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Photographer Name</Form.Label>
            <Form.Control
              type="text"
              name="photographer"
              placeholder="Photographer's Name"
              value={formData.photographer}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Photographer's Email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      )}
    </div>
  );
}

=======
export function ImgUpload() {
    const [file, setFile] = useState(null);

    // Handle file input change
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile) {
            setFile(URL.createObjectURL(selectedFile));
        }
    };

    return (
        <div className="flex w-full flex-col items-center justify-center">
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
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                    </p>
                </div>
                <input
                    id="dropzone-file"
                    type="file"
                    onChange={handleFileChange}
                    className="hidden"
                />
            </Form.Label>

            {/* File Preview */}
            {file && (
                <div className="mt-4">
                    <img
                        src={file}
                        alt="Preview"
                        className="w-64 h-64 object-cover rounded-lg shadow-md"
                    />
                    <button
                        onClick={() => setFile(null)}
                        className="mt-2 text-red-500 hover:underline"
                    >
                        Remove File
                    </button>
                </div>
            )}
        </div>
    );
}

>>>>>>> 4ead167844177b3e7db46c8d3cc21aa2fece3b96
export default ImgUpload;
