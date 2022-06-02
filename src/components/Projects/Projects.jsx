
import "./Projects.css"

export const Projects = () =>{
    return(
        <section id="portfolio">
      <h1 class="portfolio_title">PORTFOLIO</h1>
      <div class="portfolio_guion"></div>
      <div class="portfolio_flex_content">
        <div class="portfolio_flex_item portfolio_cabin">
          <img src="./image/cabin.png" alt="Imagen de una cabina" />
        </div>
        <div class="portfolio_flex_item portfolio_cake w_33">
          <img src="./image/cake.png" alt="Imagen de una torta" />
        </div>
        <div class="portfolio_flex_item portfolio_circus w_33">
          <img src="./image/circus.png" alt="Imagen de un circo" />
        </div>
        <div class="portfolio_flex_item portfolio_game w_33">
          <img src="./image/game.png" alt="Imagen de un joystick" />
        </div>
        <div class="portfolio_flex_item portfolio_safe w_33">
          <img src="./image/safe.png" alt="Imagen de una caja fuerte" />
        </div>
        <div class="portfolio_flex_item portfolio_submarine w_33">
          <img src="./image/submarine.png" alt="Imagen de un submarino" />
        </div>
      </div>
    </section>
    )
}

export default Projects
