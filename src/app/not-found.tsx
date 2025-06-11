import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-black text-white p-4">
      <h1 className="text-4xl font-bold">404 - Página não encontrada</h1>
      <p className="text-lg text-gray-300">
        Oops! A página que você está procurando não existe.
      </p>
      <Link
        href="/"
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        Voltar para a Home
      </Link>
    </div>
  );
}