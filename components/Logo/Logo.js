import Link from "next/link";
import logoImg from "@/assets/logo.png";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <>
      <Link href="/" className={classes.logo}>
        <img src={logoImg.src} alt="logo" />
        NextLevel Food
      </Link>
    </>
  );
}

export default Logo;
