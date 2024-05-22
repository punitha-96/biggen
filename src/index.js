import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from react-dom/client
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";

// Use createRoot to render your app
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
