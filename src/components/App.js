import React from "react";

// Define NavBar component
function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

// Define Home component
function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// Define About component
function About() {
  return (
    <div id="about">
      <h2>About</h2>
    </div>
  );
}

// Define App component and include NavBar, Home, and About components
function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
