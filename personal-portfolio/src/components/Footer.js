// Import Bootstrap layout components
import { Container, Row, Col } from "react-bootstrap";

// Import the newsletter subscription form component
import { MailchimpForm } from "./MailchimpForm";

// Import images for logo and social media icons
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg"; // Example: LinkedIn or Twitter icon
import navIcon2 from "../assets/img/nav-icon2.svg"; // Example: Facebook icon
import navIcon3 from "../assets/img/nav-icon3.svg"; // Example: Instagram icon

/**
 * Footer Component
 * - Displays the newsletter subscription form
 * - Shows the site logo
 * - Shows clickable social media icons
 * - Displays copyright
 */
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          {/* Newsletter subscription form (Mailchimp) */}
          <MailchimpForm />

          {/* Left section: Company logo */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Right section: Social icons + copyright */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            
            {/* Social media icons */}
            <div className="social-icon">
              {/* Each <a> is a clickable link to a social profile */}
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>

            {/* Footer text */}
            <p>Copyright Kajal Panicker 2025. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
