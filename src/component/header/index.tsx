import Link from "next/link";

export function Header() {
  return (
    <header className="flex px-10 py-4 bg-zinc-900 text-white">
      <div className="flex items-center justify-between w-full mx-auto">
        <div>
          <Link href='/'>
            Embrace Family
          </Link>
        </div>
      </div>
      <nav>
        <ul className="flex items-center justify-center gap-8 ">
          <li>
            <Link href='/login'>
              Login
            </Link>
          </li>
          <li>
            <Link href='/register'>
              Register
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}