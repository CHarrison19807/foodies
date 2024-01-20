import Link from "next/link";
import classes from "./PageNav.module.css";
function PageNav() {
  return (
    <nav className={classes.nav}>
      <ul>
        <li>
          <Link href="/meals">Browse Meals</Link>
        </li>
        <li>
          <Link href="/community">Foodies Community</Link>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
