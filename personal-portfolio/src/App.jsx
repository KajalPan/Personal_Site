// Import the React logo (not used currently but included by default)
import logo from './logo.svg';  

// Import the global CSS for the app
import './App.css';  

// Import Bootstrap CSS for styling components like Navbar, buttons, grids, etc.
import 'bootstrap/dist/css/bootstrap.min.css';  

// Import custom React components for the website sections
import { NavBar } from "./components/NavBar";       // Navigation bar at the top
import { Banner } from "./components/Banner";       // Hero/banner section with main tagline
import { Skills } from "./components/Skills";       // Section to display skills
import { Projects } from "./components/Projects";   // Section to showcase projects
import { Contact } from "./components/Contact";     // Contact form section
import { Footer } from "./components/Footer";       // Footer section with info/newsletter links

// Main App component - the root component rendered by Vite
function App() {
  return (
    <div className="App">
      {/* Render the navigation bar */}
      <NavBar />

      {/* Render the banner/hero section */}
      <Banner />

      {/* Render the skills section */}
      <Skills />

      {/* Render the projects section */}
      <Projects />

      {/* Render the contact form section */}
      <Contact />

      {/* Render the footer */}
      <Footer />
    </div>
  );
}

// Export App component as default so Vite can render it in main.jsx
export default App;
