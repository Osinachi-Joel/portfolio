import './faqs.css'
import data from './data'
import Faq from './Faq'

const Faqs = () => {
  return (
    <section id="faqs">
      <h2>Frequetly Asked Questions</h2>
      <p>
      Here are some questions I usually get. Click to toggle the answer, and if you still have some more questions, shoot me a message from the contact section!
      </p>
      <div className="container faqs_container">
        {
          data.map(faq => (
            <Faq key={faq.id} faq={faq}/>
          ))
        }
      </div>
    </section>
  )
}

export default Faqs