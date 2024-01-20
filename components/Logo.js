import Link from "next/link";
import logoImg from "@/assets/logo.png";

function Logo() {
  return (
    <>
      <Link href="/">
        <img src={logoImg.src} alt="logo" />
        NextLevel Food
      </Link>
    </>
  );
}

export default Logo;
