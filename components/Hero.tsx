import Link from 'next/link'
import type { CosmicImage } from '@/types'

interface HeroProps {
  image?: CosmicImage
}

export default function Hero({ image }: HeroProps) {
  return (
    <section className="relative h-[70vh] min-h-[420px] flex items-center justify-center overflow-hidden">
      {image ? (
        <img
          src={`${image.imgix_url}?w=2400&h=1400&fit=crop&auto=format,compress`}
          alt="My Gallery hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 bg-ink" />
      )}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative text-center px-4">
        <h1 className="font-serif text-4xl sm:text-6xl font-semibold text-white tracking-tight">
          My Gallery
        </h1>
        <p className="mt-4 text-lg text-white/85 max-w-xl mx-auto">
          A curated collection of moments, captured through the lens.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/collections"
            className="px-6 py-3 bg-white text-ink rounded-full text-sm font-medium hover:bg-accent hover:text-white transition-colors"
          >
            View Collections
          </Link>
          <Link
            href="/photos"
            className="px-6 py-3 border border-white/60 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Browse Photos
          </Link>
        </div>
      </div>
    </section>
  )
}