// Import the Col (column) layout component from react-bootstrap.
// This helps with responsive grid layouts.
import { Col } from "react-bootstrap";

// Define the ProjectCard component.
// It takes in "title", "description", and "imgUrl" as props from its parent component.
export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    // The Col component sets the width of this card depending on screen size:
    // - size={12} means full width on extra small screens
    // - sm={6} means half width on small screens
    // - md={4} means one-third width on medium+ screens
    <Col size={12} sm={6} md={4}>

      {/* Container for the project's image and text */}
      <div className="proj-imgbx">
        
        {/* The project image, taken from the imgUrl prop */}
        <img src={imgUrl} alt={title} />

        {/* Text overlay section for the project */}
        <div className="proj-txtx">
          {/* Project title */}
          <h4>{title}</h4>
          {/* Project description */}
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
