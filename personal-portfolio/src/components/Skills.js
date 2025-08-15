import meter1 from "../assets/img/meter1.svg"; // Skill meter image 1
import meter2 from "../assets/img/meter2.svg"; // Skill meter image 2
import meter3 from "../assets/img/meter3.svg"; // Skill meter image 3
import Carousel from 'react-multi-carousel'; // Carousel component to slide skills
import 'react-multi-carousel/lib/styles.css'; // Default styles for carousel
import arrow1 from "../assets/img/arrow1.svg"; // Arrow image 1 (if used)
import arrow2 from "../assets/img/arrow2.svg"; // Arrow image 2 (if used)
import colorSharp from "../assets/img/color-sharp.png" // Background decorative image

export const Skills = () => {
  // Responsive settings for carousel on different screen sizes
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 }, // Extra large screens
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 }, // Standard desktop
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 }, // Tablet screens
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 }, // Mobile screens
      items: 1
    }
  };

  return (
    <section className="skill" id="skills"> 
      {/* Skills section with unique ID for navigation */}
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {/* Skill box with animation class */}
                    <div className="skill-bx wow zoomIn"> 
                        <h2>Skills</h2>
                        <p>
                          Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
                          Lorem Ipsum has been the industry's standard dummy text.
                        </p>

                        {/* Carousel to slide through skill items */}
                        <Carousel 
                          responsive={responsive} 
                          infinite={true} 
                          className="owl-carousel owl-theme skill-slider"
                        >
                            {/* Individual skill items */}
                            <div className="item">
                                <img src={meter1} alt="Web Development Skill Level" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Brand Identity Skill Level" />
                                <h5>Brand Identity</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Logo Design Skill Level" />
                                <h5>Logo Design</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Web Development Skill Level" />
                                <h5>Web Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>

        {/* Decorative background image on left side */}
        <img className="background-image-left" src={colorSharp} alt="Decorative Background" />
    </section>
  )
}
