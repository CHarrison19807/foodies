import classes from "./PageNav.module.css";
import NavLink from "../NavLink/NavLink";

function PageNav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <NavLink href="/meals">Browse Meals</NavLink>
        </li>
        <li>
          <NavLink href="/community">Foodies Community</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
