import Link from "next/link";

export default function Home() {
  return (
    <div className="min-w-screen min-h-screen bg-black text-white">
      <header>
        <h1 className="text-center py-9 px-1 text-4xl">🤖 Calc App 🤖</h1>
      </header>
      <main className="w-10/12 my-8 mx-auto">
        <ul className="flex flex-auto gap-x-4 gap-y-5 flex-wrap">
          <li className="rounded-md border border-zinc-600 flex-initial text-center w-[calc(50%-0.5rem)] hover:bg-zinc-600 active:bg-zinc-600 transition-all">
            <Link href="/bmi" className="w-full block px-5 py-5">
              BMI Calculator
            </Link>
          </li>
          <li className="rounded-md border border-zinc-600 flex-initial text-center w-[calc(50%-0.5rem)] hover:bg-zinc-600 active:bg-zinc-600 transition-all">
            <Link href="/tip" className="w-full block px-5 py-5">
              Tip Calculator
            </Link>
          </li>
          <li className="rounded-md border border-zinc-600 flex-initial text-center w-[calc(50%-0.5rem)] hover:bg-zinc-600 active:bg-zinc-600 transition-all">
            <Link href="/tip" className="w-full block px-5 py-5">
              Preparing
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}
