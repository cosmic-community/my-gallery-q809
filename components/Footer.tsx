import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 mt-16">
      <div className="container-page py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-serif text-xl text-ink">My Gallery</p>
        <nav className="flex gap-6">
          <Link href="/collections" className="text-sm text-ink-soft hover:text-accent transition-colors">
            Collections
          </Link>
          <Link href="/photos" className="text-sm text-ink-soft hover:text-accent transition-colors">
            Photos
          </Link>
          <Link href="/about" className="text-sm text-ink-soft hover:text-accent transition-colors">
            About
          </Link>
        </nav>
        <p className="text-sm text-ink-soft">© {year} My Gallery</p>
      </div>
    </footer>
  )
}