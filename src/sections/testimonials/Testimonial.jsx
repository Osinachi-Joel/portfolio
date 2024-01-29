import Card from "../../components/Card"

const Testimonial = ({testimonial}) => {
  return (
    <Card className="light">
        <p>{testimonial.quote}</p>
        <div className="testimonial_client">
            <div className="testimonial_client-avatar">
                <img src={testimonial.avatar} alt="Testimonial Avatar" />
            </div>
            <div className="testimonial_client-details">
                <h6>{testimonial.name}</h6>
                <small>{testimonial.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Testimonial