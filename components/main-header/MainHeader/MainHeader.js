import Logo from "../Logo/Logo";
import MainHeaderBackground from "../MainHeaderBackground/MainHeaderBackground";
import PageNav from "../PageNav/PageNav";
import classes from "./MainHeader.module.css";

function MainHeader() {
  return (
    <header className={classes.header}>
      <MainHeaderBackground />
      <Logo />
      <PageNav />
    </header>
  );
}

export default MainHeader;
