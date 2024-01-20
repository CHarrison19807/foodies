import Logo from "../Logo/Logo";
import PageNav from "../PageNav/PageNav";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <Logo />
      <PageNav />
    </header>
  );
}

export default MainHeader;
