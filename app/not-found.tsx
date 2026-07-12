import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-page py-32 text-center">
      <h1 className="font-serif text-6xl text-ink">404</h1>
      <p className="text-ink-soft mt-4">We couldn't find the page you were looking for.</p>
      <Link
        href="/"
        className="inline-block mt-8 px-6 py-3 bg-ink text-cream rounded-full text-sm font-medium hover:bg-accent transition-colors"
      >
        Back home
      </Link>
    </div>
  )
}