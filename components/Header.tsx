import Link from 'next/link'

export default function Header() {
  const links = [
    { href: '/', label: 'Home' },
    { href: '/collections', label: 'Collections' },
    { href: '/photos', label: 'Photos' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About' },
  ]

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur border-b border-ink/10">
      <div className="container-page flex items-center justify-between h-16">
        <Link href="/" className="font-serif text-2xl font-semibold tracking-tight text-ink">
          My Gallery
        </Link>
        <nav className="flex items-center gap-5 sm:gap-7">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft hover:text-accent transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}