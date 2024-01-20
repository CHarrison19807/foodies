import Link from "next/link";

function MealPage() {
  return (
    <main>
      <h1>Meals</h1>
      <p>
        <Link href="/meals/food">food</Link>
      </p>
      <p>
        <Link href="/meals/meal">meal</Link>
      </p>
      <p>
        <Link href="/meals/123">123</Link>
      </p>
    </main>
  );
}

export default MealPage;
