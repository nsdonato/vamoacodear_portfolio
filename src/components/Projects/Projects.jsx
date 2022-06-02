import ProjectItem from "../NavBarItem/NavBarItem"
import "./Projects.css"

export const Projects = () =>{
    return(
        <section id="portfolio">
            <h1 class="portfolio_title">PORTFOLIO</h1>
            <div class="portfolio_guion"></div>
              <div class="portfolio_flex_content">
              
               <ProjectItem className="portfolio_flex_item portfolio_cabin" src="bkp/image/cabin.png" alt="Imagen de una cabina" ></ProjectItem>
               <ProjectItem className="portfolio_flex_item portfolio_cake w_33" src="bkp/image/cake.png" alt="Imagen de una torta" ></ProjectItem>
               <ProjectItem className="portfolio_flex_item portfolio_circus w_33" src="bkp/image/circus.png" alt="Imagen de un circo" ></ProjectItem>
               <ProjectItem className="portfolio_flex_item portfolio_game w_33" src="bkp/image/game.png" alt="Imagen de un joystick" ></ProjectItem>
               <ProjectItem className="portfolio_flex_item portfolio_safe w_33" src="bkp/image/safe.png" alt="Imagen de una caja fuerte" ></ProjectItem>
               <ProjectItem className="portfolio_flex_item portfolio_submarine w_33" src="bkp/image/submarine.png" alt="Imagen de un submarino" ></ProjectItem>
                
                
            </div>
    </section>
    )
}

export default Projects
