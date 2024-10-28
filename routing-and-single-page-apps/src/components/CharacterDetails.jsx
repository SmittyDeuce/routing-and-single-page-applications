// src/components/CharacterDetails.jsx
import React from "react"; // Importing React to use JSX syntax
import { useParams } from "react-router-dom"; // Importing useParams to access route parameters

const CharacterDetails = () => {
  // Destructuring characterId from the route parameters
  const { characterId } = useParams();

  const characters = [
    { id: "1", name: "Spider-Man", description: "A superhero with spider-like abilities." },
    { id: "2", name: "Iron Man", description: "A wealthy industrialist and ingenious inventor." },
    { id: "3", name: "Captain America", description: "A super-soldier from World War II." },
  ];

  // Finding the character that matches the characterId from the URL
  const character = characters.find((char) => char.id === characterId);

  // If the character is not found, display an error message
  if (!character) {
    return <p>Error: Character not found.</p>;
  }

  return (
    <div>
      <h2>{character.name}</h2> {/* Displaying the character's name */}
      <p>ID: {character.id}</p> {/* Displaying the character's ID */}
      <p>Description: {character.description}</p> {/* Displaying the character's description */}
    </div>
  );
};

// Exporting the CharacterDetails component for use in other parts of the application
export default CharacterDetails;
