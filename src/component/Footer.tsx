import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-600 text-white pt-6 pb-12">
      <div className="flex justify-center pb-4">
        <ul className="flex space-x-6">
          <li className="hover:text-rose-300 transition-colors">
            <Link href="#">About Us</Link>
          </li>
          <li className="hover:text-rose-300 transition-colors">
            <Link href="#">FAQ</Link>
          </li>
        </ul>
      </div>
      <div className="border-t border-gray-800 pt-6 text-center">
        © {new Date().getFullYear()} Embrace Family. All rights reserved.
      </div>
    </footer>
  )
}