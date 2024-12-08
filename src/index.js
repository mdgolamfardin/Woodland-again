// Import the React library, which is used to build UI components
import React from 'react';

// Import the ReactDOM library, which is used to render React components into the DOM (the HTML structure)
import ReactDOM from 'react-dom/client';

// Import the CSS file for styling the application
import './index.css';

// Import the `MyPages` component from the `MyPages.js` file
import MyPages from './MyPages';

import 'leaflet/dist/leaflet.css';

// Get a reference to the HTML element with the ID 'root'
// This is where the React app will be rendered
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the `MyPages` component into the 'root' element
// `React.StrictMode` is a wrapper that helps highlight potential problems in the app
root.render(
  <React.StrictMode>
    <MyPages />
  </React.StrictMode>
);