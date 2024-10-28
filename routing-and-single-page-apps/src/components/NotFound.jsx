import React from "react"; // Importing React library to use JSX syntax
import "./NotFound.css"; // Importing CSS styles for the NotFound component

// Functional component to display a Not Found page
const NotFound = () => {
  return (
    // Main container with center alignment and padding
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>404 - Page Not Found</h1> {/* Heading indicating the error status */}
      <p>The page you're looking for does not exist.</p> {/* Message to inform the user */}
    </div>
  );
};

// Exporting the NotFound component for use in other parts of the application
export default NotFound;
