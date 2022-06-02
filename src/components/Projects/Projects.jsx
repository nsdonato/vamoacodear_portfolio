import ProjectItem from "../ProjectItem/ProjectItem"
import "./Projects.css"

export const Projects = () => {
  return (
    <section id="portfolio">
      <h1 className="portfolio_title">PORTFOLIO</h1>
      <div className="portfolio_guion"></div>
      <div className="portfolio_flex_content">
        <ProjectItem className="portfolio_cabin" src="bkp/image/cabin.png" alt="Imagen de una cabina" />
        <ProjectItem className="portfolio_cake w_33" src="bkp/image/cake.png" alt="Imagen de una torta" />
        <ProjectItem className="portfolio_circus w_33" src="bkp/image/circus.png" alt="Imagen de un circo" />
        <ProjectItem className="portfolio_game w_33" src="bkp/image/game.png" alt="Imagen de un joystick" />
        <ProjectItem className="portfolio_safe w_33" src="bkp/image/safe.png" alt="Imagen de una caja fuerte" />
        <ProjectItem className="portfolio_submarine w_33" src="bkp/image/submarine.png" alt="Imagen de un submarino" />
      </div>
    </section>
  )
}

export default Projects
