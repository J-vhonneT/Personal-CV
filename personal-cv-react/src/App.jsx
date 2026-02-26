import { useState, useEffect } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import './index.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showSkills, setShowSkills] = useState(true);

  // Add/remove dark-mode class on <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="App">
      {/* Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        style={{ marginBottom: "20px" }}
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <Header />

      <main className="container">
        <About />

        {/* Show/Hide Skills button above Skills card */}
        <button
          id="toggleSkills"
          onClick={() => setShowSkills(!showSkills)}
        >
          {showSkills ? "Hide Skills" : "Show Skills"}
        </button>

        {showSkills && <Skills />}

        <Education />
        <Contact />
      </main>

      <footer>
        <p className="footer">&copy; 2026 J-vhonne L. Tabaniag. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;