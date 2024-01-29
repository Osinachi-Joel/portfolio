import './contact.css'
import data from './data'

const Contact = () => {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Shoot me a messasge via any of the links below</p>
      <div className="container contact_container">
        {
          data.map(contact => <a key={contact.id} href={contact.link} target='_blank' rel='noopener noreferrer'>
            {contact.icon}
          </a>)
        }
      </div>
    </section>
  )
}

export default Contact