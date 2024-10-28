// src/App.jsx
import React from "react"; // Importing React
import { Route, Routes } from "react-router-dom"; // Importing Route and Routes for routing
import "./App.css"; // Importing CSS for styling the App

// Importing components for routing
import BrowseCharacter from "./components/BrowseCharacters";
import CharacterDetails from "./components/CharacterDetails";
import Comics from "./components/Comics";
import Home from "./components/Home";
import NavigationBar from "./components/Navigation"; // Navigation bar component
import NotFound from "./components/NotFound"; // Component for handling 404 errors

function App() {
  return (
    <>
      <NavigationBar /> {/* Rendering the navigation bar */}
      <Routes> {/* Setting up routes for the application */}
        {/* Route for browsing characters */}
        <Route path="/browsecharacter" element={<BrowseCharacter />} />
        {/* Route for character details, expects an ID */}
        <Route path="/characterdetails/:characterId" element={<CharacterDetails />} />
        {/* Route for comics page */}
        <Route path="/comics" element={<Comics />} />
        {/* Route for home page */}
        <Route path="/home" element={<Home />} /> 
        {/* Default route redirects to home page */}
        <Route path="/" element={<Home />} /> 
        {/* Route for handling all undefined paths, shows NotFound component */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </>
  );
}

export default App; // Exporting the App component for use in other parts of the application
