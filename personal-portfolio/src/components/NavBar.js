// React hooks for state and side effects
import { useState, useEffect } from "react";

// React-Bootstrap components for layout and navigation
import { Navbar, Nav, Container } from "react-bootstrap";

// Importing images for logo and social icons
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// HashLink allows smooth scrolling to sections on the page
import { HashLink } from 'react-router-hash-link';

// BrowserRouter provides routing context for navigation links
import {
  BrowserRouter as Router
} from "react-router-dom";

// Functional component for the navigation bar
export const NavBar = () => {

  // State to track which nav link is currently active
  const [activeLink, setActiveLink] = useState('home');

  // State to track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  // Effect runs once after component mounts
  useEffect(() => {
    const onScroll = () => {
      // If the user scrolls more than 50px, set scrolled to true
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    // Listen to the window scroll event
    window.addEventListener("scroll", onScroll);

    // Cleanup: remove the event listener when component unmounts
    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  // Function to update the active nav link when clicked
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // Router enables navigation links to work
    <Router>
      {/* Navbar expands on medium screens, changes class if scrolled */}
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          {/* Brand logo */}
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>

          {/* Toggle button for mobile view */}
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          {/* Collapsible nav items */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {/* Navigation links with active state */}
              <Nav.Link 
                href="#home" 
                className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                href="#skills" 
                className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link 
                href="#projects" 
                className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link 
                href="#blog" 
                className={activeLink === 'blog' ? 'active navbar-link' : 'navbar-link'} 
                onClick={() => onUpdateActiveLink('blog')}
              >
                Blog
              </Nav.Link>
            </Nav>

            {/* Social icons and connect button */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon3} alt="" /></a>
              </div>
              {/* HashLink scrolls smoothly to the 'connect' section */}
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
