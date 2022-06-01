const NavBarItem = ({ className, nameLink }) => {
    return (
        <li className={className}>
            <a href="#">{nameLink}</a>
        </li>
    );
}

export default NavBarItem