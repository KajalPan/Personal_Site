// Import React hooks for state and lifecycle management
import { useState, useEffect } from "react";

// Import layout components from React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import image asset for banner section
import headerImg from "../assets/img/header-img.svg";

// Import arrow icon from react-bootstrap-icons
import { ArrowRightCircle } from 'react-bootstrap-icons';

// Import animate.css for CSS animations
import 'animate.css';

// Import TrackVisibility to detect if component is visible on screen
import TrackVisibility from 'react-on-screen';

// Banner component for the homepage hero section
export const Banner = () => {
  // State variables for rotating text effect
  const [loopNum, setLoopNum] = useState(0);         // Track which word is currently showing
  const [isDeleting, setIsDeleting] = useState(false); // Track if text is being deleted
  const [text, setText] = useState('');              // Current displayed text
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Speed of typing effect
  const [index, setIndex] = useState(1);             // Position in the current word
  const toRotate = [ "Solutions Architect", "UI/UX Designer", "Web Developer", "Project Manager", "Concept Artist"]; // Words to rotate
  const period = 2000;                               // Pause time before deleting word

  // useEffect to run typing effect repeatedly
  useEffect(() => {
    // Set interval to call tick function every delta milliseconds
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup interval on unmount or when text changes
    return () => { clearInterval(ticker) };
  }, [text])

  // Function to handle typing and deleting letters
  const tick = () => {
    let i = loopNum % toRotate.length;             // Get current word index
    let fullText = toRotate[i];                    // Current full word
    let updatedText = isDeleting 
      ? fullText.substring(0, text.length - 1)    // Remove a letter if deleting
      : fullText.substring(0, text.length + 1);   // Add a letter if typing

    setText(updatedText);                          // Update state

    // Adjust speed when deleting
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    // When full word is typed, start deleting after a pause
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } 
    // When word is fully deleted, move to next word
    else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } 
    // Otherwise, continue typing or deleting
    else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    // Banner section with id "home" for navigation
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          {/* Left column for text content */}
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Animate fade-in when visible on screen
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  {/* Small tagline */}
                  <span className="tagline">Welcome to my Portfolio</span>
                  {/* Main heading with rotating text effect */}
                  <h1>
                    {`Hi, I'm Kajal!`} 
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Solutions Architect", "UI/UX Designer", "Web Developer", "Project Manager", "Concept Artist" ]'>
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  {/* Short introductory paragraph */}
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
                  {/* Button with icon for connecting (placeholder action) */}
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>}
            </TrackVisibility>
          </Col>

          {/* Right column for banner image */}
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                // Animate zoom-in when visible on screen
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
