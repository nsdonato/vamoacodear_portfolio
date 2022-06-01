import NavBarItem from "../NavBarItem/NavBarItem"
import "./NavBar.css"

const NavBar = () => (
    <nav>
        <ul id="nav_menu">
            <div class="menu_logo">
                <li class="menu_ada"><a href="#vamoacodear">VAMOACODEAR</a></li>
            </div>
            <div class="menu_options">
                <NavBarItem className="menu_portfolio" nameLink="PORTFOLIO" />
                <NavBarItem className="menu_about" nameLink="ABOUT" />
                <NavBarItem className="menu_contact" nameLink="CONTACT" />
                <NavBarItem className="menu_btn_mobile btn_green" nameLink="MENU" />
            </div>
        </ul>
    </nav>
)

export default NavBar