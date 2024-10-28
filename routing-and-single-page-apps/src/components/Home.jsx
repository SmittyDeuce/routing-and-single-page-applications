import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div id="main-container">
      <h1>Comic Book Library Project</h1>
      <div id="home-container">
        <p>
          Welcome to the Comic Book Library project! This assignment will detail set
          up basic routing in a React app. in a few pages I created: Home, Browse Characters,
          Character Details, and Comics, using React Router.
        </p>
        <div id="list-container">
            <h3>Project Steps:</h3>
            
            <div id="ol-container">
            <ol>
                <li>Install React Router - Set up React Router in your project.</li>
                <li>
                Create Route Components - Build simple components for each page.
                </li>
                <li>Set Up Routes - Use routes to navigate between pages.</li>
            </ol>
            </div>

            <h3>Bonus:</h3>
            <div id="ul-container">
            <ul>
                <li>Add dynamic routes for character details.</li>
                <li>Set up a NotFound page to handle unknown routes.</li>
            </ul>
            </div>
        </div>

      </div>

    </div>
  );
};

export default Home;
