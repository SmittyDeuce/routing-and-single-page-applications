import { Link, NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="navbar">
            <NavLink to="home" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="browsecharacter" className={({ isActive }) => (isActive ? 'active' : '')}>Browse Character</NavLink>
            <NavLink to="characterdetails" className={({ isActive }) => (isActive ? 'active' : '')}>Character Details</NavLink>
            <NavLink to="comics" className={({ isActive }) => (isActive ? 'active' : '')}>Comics</NavLink>
        </nav>
    );
}

export default NavigationBar;
