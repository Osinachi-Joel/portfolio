import Card from "../../components/Card"

const Project = ({project}) => {
  return (
    <Card className="portfolio_project">
        <div className="portfolio_project-image">
            <img src={project.image} alt="Portfolio Project jpg" />
        </div>
        <h4>{project.title}</h4>
        <p>{project.desc}</p>
        <div className="portfolio_project-cta">
            <a href={project.demo} className="btn sm" target="_blank" rel="noopener noreferrer">Demo</a>
            <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">Github</a>

        </div>
    </Card>
  )
}

export default Project