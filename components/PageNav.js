import Link from "next/link";

function PageNav() {
  return (
    <nav>
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
