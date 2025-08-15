// Importing layout components from react-bootstrap for responsive grid layout
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";

// Importing a custom component to display each project
import { ProjectCard } from "./ProjectCard";

// Importing images for projects
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

// Importing a background design image
import colorSharp2 from "../assets/img/color-sharp2.png";

// Importing animation styles
import 'animate.css';

// Importing a package to detect if an element is visible on the screen
import TrackVisibility from 'react-on-screen';

// Main Projects component
export const Projects = () => {

  // Array of project objects (title, description, image)
  // This will be used to display project cards dynamically
  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    // Section wrapper for styling and navigation link (id="projects")
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* TrackVisibility checks if this part of the page is currently visible */}
            <TrackVisibility>
              {({ isVisible }) =>
              // If visible, apply fade-in animation
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                
                {/* Section Title */}
                <h2>Projects</h2>

                {/* Placeholder description text */}
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>

                {/* Tab container for switching between different project categories */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  
                  {/* Navigation for tabs */}
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  {/* Tab content area */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    
                    {/* First tab showing the list of projects */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        {/* Loop through the projects array and create a ProjectCard for each */}
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index} // Unique key for React to track list items
                                {...project} // Spread operator to pass title, description, and imgUrl as props
                              />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>

                    {/* Second tab with placeholder text */}
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </Tab.Pane>

                    {/* Third tab with placeholder text */}
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
                    </Tab.Pane>

                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Decorative background image */}
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
