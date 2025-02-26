import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold">Jestでnext/linkをテストする</h1>
      <Link href="/about">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold mt-5 py-2 px-4 rounded">
          Button
        </button>
      </Link>
    </div>
  );
}
