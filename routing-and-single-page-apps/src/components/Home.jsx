const Home = () => {
  return (
    <div>
      <h1>Comic Book Library Project</h1>
      <div id="home-container">
        <p>
          Here’s a more concise filler text that captures the essentials for the
          Home Page: Comic Book Library Project Welcome to your Comic Book
          Library project! This assignment will help you set up basic routing in
          a React app. You'll create a few pages: Home, Browse Characters,
          Character Details, and Comics, using React Router.
        </p>
      </div>

      <h3>Project Steps:</h3>
      <div id="ol-container">
        <ol>
          <li>Install React Router - Set up React Router in your project.</li>
          <li>Create Route Components - Build simple components for each page.</li>
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
  );
};

export default Home;
