import Link from "next/link";
import Image from "next/image";

import logoImg from "@/assets/logo.png";
import classes from "./Logo.module.css";

function Logo() {
  return (
    <>
      <Link href="/" className={classes.logo}>
        <Image src={logoImg} alt="NextLevel Food Logo" priority />
        NextLevel Food
      </Link>
    </>
  );
}

export default Logo;
