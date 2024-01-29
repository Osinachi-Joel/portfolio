import './about.css'
import Aboutimage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'

/**
 * About component represents a section of a webpage providing information about the creator.
 * It includes a portrait image, a brief introduction, a set of informational cards, and a download link for the resume.
 * @returns {JSX.Element} The JSX representation of the About component.
 */

const About = () => {
  return (
    <section id="about">
      {/* Container for the about section content */}
      <div className="container about_container">

        {/* Left side of the about section */}
        <div className="about_left">
          <div className="about_portrait">
            <img src={Aboutimage} alt="AboutImage" />
          </div>
        </div>

        {/* Right side of the about section */}
        <div className="about_right">
          <h2>About Me</h2>

          {/* Section for the informational cards */}
          <div className="about_cards">
            {
              // Mapping through the data array to generate cards using the Card component
              data.map(item =>
                <Card key={item.id} className="about_card">
                  <span className='about_card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              )
            }
          </div>

          {/* Introduction paragraphs */}
          <p>
            Building projects my clients love have always been my passion. Being in the web development industry for over 3 years and serving more than 70 happy clients worldwide, 
            I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is  from Accra, Ghana. I'm a full-stack web developer with a Bachelors degree in Computer Science. My top priority is to get your business online the right way, 
            giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! 
            Check out my resume below!
          </p>

           {/* Download CV button */}
          <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About