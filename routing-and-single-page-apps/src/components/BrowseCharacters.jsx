// src/components/BrowseCharacters.jsx
import React from "react"; // Importing React to use JSX syntax
import { Link } from "react-router-dom"; // Importing Link component for navigation

const BrowseCharacters = () => {
  // Mock character data; replace with actual data fetching logic
  const characters = [
    { id: 1, name: "Spider-Man" }, // Character object with id and name
    { id: 2, name: "Iron Man" },    // Character object with id and name
    { id: 3, name: "Captain America" }, // Character object with id and name
  ];

  return (
    <div>
      <h2>Browse Characters</h2> {/* Heading for the character browsing section */}
      <ul>
        {/* Mapping over the characters array to generate a list */}
        {characters.map((character) => (
          <li key={character.id}> {/* Unique key for each list item */}
            {/* Link to the CharacterDetails page with character ID in the URL */}
            <Link to={`/characterdetails/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the BrowseCharacters component for use in other parts of the application
export default BrowseCharacters;
