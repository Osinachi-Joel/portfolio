import './services.css'
import data from './data'
import Card from '../../components/Card'

/**
 * Services component represents a section of a webpage showcasing various services.
 * It includes a title, introductory paragraph, and a set of cards displaying service details.
 * @returns {JSX.Element} The JSX representation of the Services component.
 */

const Services = () => {
  return (
    <section id="services">
      {/* Section title */}
      <h2>Services</h2>

      {/* Introduction paragraph */}
      <p>I give you the best in all the services below</p>

      {/* Container for the services cards */}
      <div className="container services_container">
        {
          // Mapping through the data array to generate service cards using the Card component
          data.map(item =>(
            <Card key={item.id} className="service light">

              {/* Service icon */}
              <div className="service_icon">{item.icon}</div>

              {/* Service details */}
              <div className="service_details">
                <h4>{item.title}</h4>
                  <p>{item.desc}</p>
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Services