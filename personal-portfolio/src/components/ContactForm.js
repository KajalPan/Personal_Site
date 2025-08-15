// React hook to manage component state
import { useState } from "react";

// Layout components from react-bootstrap for responsive design
import { Container, Row, Col } from "react-bootstrap";

// Image asset for the contact section
import contactImg from "../assets/img/contact-img.svg";

// Animate.css library for easy CSS animations
import 'animate.css';

// Library that can detect when an element is visible on screen
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  // Initial state of the form fields
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  // State to hold current form values
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  // State to update the button text during sending
  const [buttonText, setButtonText] = useState('Send');

  // State to show success or error messages after form submission
  const [status, setStatus] = useState({});

  // Function to update form field values dynamically
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,       // Keep existing form data
      [category]: value     // Update only the changed field
    })
  }

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    setButtonText("Sending..."); // Update button text

    // Send form data to backend API (localhost:5000 in this example)
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails), // Convert form object to JSON
    });

    setButtonText("Send"); // Reset button text

    // Parse the server's response
    let result = await response.json();

    // Reset form fields
    setFormDetails(formInitialDetails);

    // Set status based on API response
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* Left column: Contact image */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Show zoom animation if the image is visible
                <img
                  className={isVisible ? "animate__animated animate__zoomIn" : ""}
                  src={contactImg}
                  alt="Contact Us"
                />
              }
            </TrackVisibility>
          </Col>

          {/* Right column: Contact form */}
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>

                  {/* Form with submit handler */}
                  <form onSubmit={handleSubmit}>
                    <Row>
                      {/* First Name input */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>

                      {/* Last Name input */}
                      <Col size={12} sm={6} className="px-1">
                        {/* NOTE: Typo in formDetails.lasttName should be formDetails.lastName */}
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>

                      {/* Email input */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>

                      {/* Phone input */}
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>

                      {/* Message textarea */}
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>

                        {/* Submit button */}
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>

                      {/* Status message after submission */}
                      {
                        status.message &&
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>
                            {status.message}
                          </p>
                        </Col>
                      }
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
