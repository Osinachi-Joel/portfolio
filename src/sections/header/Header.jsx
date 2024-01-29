import './header.css'
import HeaderImage from '../../assets/header.jpg'
import data from './data'

/**
 * Header component represents the top section of a webpage, typically containing a profile image,
 * a brief introduction, call-to-action buttons, and social media links.
 * @returns {JSX.Element} The JSX representation of the Header component.
 */

const Header = () => {
  return (
    <header id="header">
      {/* Container for the header content */}
      <div className="container header_container">

        {/* Profile image section */}
        <div className="header_profile">
          <img src={HeaderImage} alt="Header Potrait" />
        </div>

        {/* Personal information section */}
        <h3>My Name</h3>
        <p>
          You are a click away from building your dream website or web app. 
          Send me the details of your project for a modern, mobile responsive, highly performant website today!
        </p>

        {/* Call-to-action buttons section */}
        <div className="header_cta">
          <a href="#contact" className="btn primary"> Let's Talk</a>
          <a href="#portfolio" className="btn light"> My Works</a>
        </div>

        {/* Social media links section */}
        <div className="header_social">
          {
            // Mapping through the data array to generate social media links with icons
            data.map(item => <a key={item.id} href={item.link} target={"_blank"} rel="noopener noreferrer">{item.icon}</a>)
          }
        </div>
      </div>
    </header>
  )
}

export default Header