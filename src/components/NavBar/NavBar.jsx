import "./NavBar.css"

const NavBar = () => (
    <nav>
        <ul id="nav_menu">
            <div class="menu_logo">
                <li class="menu_ada"><a href="#vamoacodear">VAMOACODEAR</a></li>
            </div>
            <div class="menu_options">
                <li class="menu_portfolio">
                    <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li class="menu_about"><a href="#about">ABOUT</a></li>
                <li class="menu_contact"><a href="#contact">CONTACT</a></li>
                <li class="menu_btn_mobile btn_green"><a href="#">MENU</a></li>
            </div>
        </ul>
    </nav>
)

export default NavBar