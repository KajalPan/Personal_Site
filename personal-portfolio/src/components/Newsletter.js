// Import React hooks and Bootstrap components
import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

/**
 * Newsletter Component
 * 
 * Props:
 * - status: Current state of the subscription process ("sending", "error", "success")
 * - message: Message from the Mailchimp API (error text or success confirmation)
 * - onValidated: Function that runs when the email is valid and ready to send
 */
export const Newsletter = ({ status, message, onValidated }) => {
  
  // Local state to store the user's email input
  const [email, setEmail] = useState('');

  /**
   * useEffect: Runs code when "status" changes.
   * If subscription is successful, clear the email input field.
   */
  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  /**
   * handleSubmit: Handles form submission
   * - Prevents page refresh (default browser form behavior)
   * - Checks if the email field is not empty and contains "@"
   * - Calls onValidated() with the email data in Mailchimp format
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  // Clears the email field after a successful subscription
  const clearFields = () => {
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row>
          {/* Left section: heading and subscription status messages */}
          <Col lg={12} md={6} xl={5}>
            <h3>Subscribe to our Newsletter<br /> & Never miss latest updates</h3>
            
            {/* Show "Sending..." while request is in progress */}
            {status === 'sending' && <Alert>Sending...</Alert>}
            
            {/* Show error message in red */}
            {status === 'error' && <Alert variant="danger">{message}</Alert>}
            
            {/* Show success message in green */}
            {status === 'success' && <Alert variant="success">{message}</Alert>}
          </Col>

          {/* Right section: email input and submit button */}
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                {/* Email input field */}
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)} // Update email state as user types
                  placeholder="Email Address"
                />
                {/* Submit button */}
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
