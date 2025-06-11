import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RootButton({ href = "/" }: { href?: string }) {
  return (
    <div className="mx-160">
      <Link
        href={href}
        className="w-12 h-12 flex items-center justify-center rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
        aria-label="Voltar para a página inicial"
      >
        <ArrowLeft className="text-rose-600" />
      </Link>
    </div>
  );
}