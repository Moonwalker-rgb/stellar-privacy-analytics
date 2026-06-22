import Link from 'next/link';

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-lg font-semibold text-gray-900">
          Stellar Docs
        </Link>
        <nav className="flex gap-4 text-sm text-gray-600">
          <Link href="/">Home</Link>
          <Link href="/tracks">Tracks</Link>
        </nav>
      </div>
    </header>
  );
}
